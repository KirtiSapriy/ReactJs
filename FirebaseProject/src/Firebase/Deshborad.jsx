import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { format } from "date-fns";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Swal from "sweetalert2";
import { tr } from "date-fns/locale";

export default function Dashboard() {
    const [uid, setUid] = useState("");
    const [task, setTask] = useState("");
    const [allData, setAllData] = useState([]);
    const [editId, setEditId] = useState(null);
    const [data, setData] = useState({});
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [selectedDate, setSelectedDate] = useState("");
    const [showFilters, setShowFilters] = useState(false);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
                getData(user.uid);
                getTask();
            }
        });
    }, []);

    const getData = async (uid) => {
        const userSnap = await getDoc(doc(db, "users", uid));
        if (userSnap.exists()) {
            setData(userSnap.data());
        }
    };

    const getTask = async () => {
        const querySnapshot = await getDocs(collection(db, "Task"));
        const getdata = querySnapshot.docs.map((el) => ({ id: el.id, ...el.data() }));
        setAllData(getdata);
    };

    const Add = async () => {
        if (!task) {
            Swal.fire("Error", "Task is required!", "error");
            return;
        }

        const currentDate = format(new Date(), "dd-MM-yyyy");

        if (editId != null) {
            await updateDoc(doc(db, "Task", editId), { task });
        } else {
            let obj = { task, status: false, userId: uid, date: currentDate };
            await addDoc(collection(db, "Task"), obj);
        }

        setTask("");
        setEditId(null);
        getTask();
    };

    const Delete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteDoc(doc(db, "Task", id));
                setAllData(allData.filter(task => task.id !== id));
                Swal.fire("Deleted!", "Your task has been deleted.", "success");
            }
        });
    };

    const toggleStatus = async (id, status) => {
        await updateDoc(doc(db, "Task", id), { status: !status });
        setAllData(allData.map(task => (task.id === id ? { ...task, status: !status } : task)));
    };

    const removeFilter = () => {
        setSearch("");
        setFilter("all");
        setSelectedDate("");
    };

    const filteredData = allData.filter((task) => {
        // Filter by Status (Pending, Completed, or All)
        if (filter !== "all") {
            if (filter === "pending" && task.status) return false;  // Show only pending
            if (filter === "completed" && !task.status) return false;  // Show only completed
        }

        // Filter by Date
        if (selectedDate && task.date !== selectedDate) return false;

        // Filter by Search
        if (search && !task.task.toLowerCase().includes(search.toLowerCase())) return false;

        return true;
    });

    const completedTasks = filteredData.filter(task => task.status).length;
    const pendingTasks = filteredData.length - completedTasks;
    const dataChart = [
        { name: "Completed", value: completedTasks, color: "#2196F3" },
        { name: "Pending", value: pendingTasks, color: "#E91E63" }
    ];

    return (
        <div className="min-h-screen p-5 w-full max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center">Dashboard</h1>
            <h1 className="text-3xl mx-7 font-bold mt-5">Welcome, {data.name}</h1>

            <div className="mt-5 p-4 rounded-lg bg-transparent grid border md:grid-cols-5">
                <div className="flex flex-col sm:flex-row items-center gap-3 col-span-4 ">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="border rounded p-1 px-3 w-8/12 lg:w-5/12 sm:w-7/12 md:w-6/12"
                        placeholder="Enter Task"
                    />
                    <button onClick={Add} className="px-2 p-1 bg-blue-500 text-white rounded w-full sm:w-auto" disabled={editId !== null && allData.find(task => task.id === editId)?.status}>
                        {editId != null ? "Update" : "Add Task"}
                    </button>
                </div>
                <div>  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                    {showFilters ? "Hide Filters" : "Show Filters"}
                </button></div>
            </div>


            {/* Sidebar Filters */}
            {showFilters && (
                <aside className="fixed top-0 right-0 h-full w-64  bg-[#242424] shadow-lg p-5 transition-transform">
                    <h2 className="text-lg font-bold mb-3">Filters</h2>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="absolute top-6 right-8"
                    >
                        X
                    </button>

                    {/* Task Status Filter */}
                    <select className="border  rounded-lg p-2 w-full mb-3" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option className="text-black" value="all">All</option>
                        <option className="text-black" value="pending">Pending</option>
                        <option className="text-black" value="completed">Completed</option>
                    </select>

                    {/* Date Filter */}
                    <input
                        type="date"
                        className="border rounded-lg p-2 w-full mb-3"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />

                    {/* Apply & Remove Filter Buttons */}
                    <div className="flex flex-col gap-2">
                        <button onClick={() => setShowFilters(false)} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                            Apply Filters
                        </button>
                        <button onClick={removeFilter} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                            Remove Filters
                        </button>
                    </div>
                </aside>
            )}

            {/* Search Bar Above Table */}
            <div className="mt-5">
                <input
                    type="text"
                    placeholder="Search task..."
                    className="border rounded-lg p-2 w-full sm:w-6/12 md:w-4/12"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Task Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-center">
                        <thead>
                            <tr className="">
                                <th className="border border-gray-300 p-2">Select</th>
                                <th className="border border-gray-300 p-2">Task</th>
                                <th className="border border-gray-300 p-2">Status</th>
                                <th className="border border-gray-300 p-2">Date</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length != 0 ?
                                filteredData.map((task, index) => (
                                    <tr key={index} className="border capitalize border-gray-300">
                                        <td className="border border-gray-300 p-2">
                                            <input
                                                type="checkbox"
                                                checked={task.status}
                                                onChange={() => toggleStatus(task.id, task.status)}
                                                disabled={task.status}
                                            />
                                        </td>
                                        <td className="border border-gray-300 p-2">{task.task}</td>
                                        <td className="border border-gray-300 p-2">{task.status ? "Completed" : "Pending"}</td>
                                        <td className="border border-gray-300 p-2">{task.date}</td>
                                        <td className="border border-gray-300 p-2">
                                            <button
                                                className={`px-2 py-1 rounded-lg ${task.status ? "cursor-not-allowed opacity-50" : "bg-blue-600 text-white"}`}
                                                disabled={task.status}
                                                onClick={() => setEditId(task.id)}
                                            >
                                                Edit
                                            </button>
                                            <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded-lg" onClick={() => Delete(task.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )) :

                                <tr>
                                    <td colSpan={5} className="h-10 font-bold">Data not Found</td>
                                </tr>
                            }
                        </tbody>

                    </table>
                </div>

                {/* Chart Section */}
                <div className="flex justify-center">
                    <PieChart width={300} height={300}>
                        <Pie data={dataChart} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                            {dataChart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
            {/* Footer */}
            <footer className="border-t mt-5 py-3 text-center text-gray-600">
                Created by <span className="font-bold text-rose-800">Kirti Sapriya</span>
            </footer>


        </div>
    );
}
