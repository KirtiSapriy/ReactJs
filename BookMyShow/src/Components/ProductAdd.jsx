
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function Moviedd() {
        const { Id } = useParams();
        const navigate = useNavigate();

        const [Data, setData] = useState([]);
        const [obj, setObj] = useState({
                Id: Date.now(),
                Image: "",
                Name: "",
                Price: "",
                Category: "",
        });

        useEffect(() => {
                let storedData = JSON.parse(localStorage.getItem("MovieData")) || [];
                setData(storedData);

                if (Id !== undefined) {
                        const movie = storedData.find((el) => el.Id == Id);
                        if (movie) {
                                setObj(movie);
                        }
                }
        }, [Id]);

        useEffect(() => {
                if (Data.length > 0) {
                        localStorage.setItem("MovieData", JSON.stringify(Data));
                }
        }, [Data]);

        const getValue = (e) => {
                const { name, value } = e.target;
                setObj((prevObj) => ({ ...prevObj, [name]: value }));
        };

        const focus = (e) => {
                const { name } = e.target;
                setVal((prevVal) => ({ ...prevVal, [name]: false }));
        };

        const blur = (e) => {
                const { name, value } = e.target;
                if (value === "") {
                        setVal((prevVal) => ({ ...prevVal, [name]: true }));
                        Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: `Enter value ${name}`,
                        });
                }
        };

        const handleSubmit = (p) => {
                p.preventDefault();

                if (Id === undefined) {
                        setData((prevData) => [...prevData, { ...obj, Id: Date.now() }]);
                } else {
                        const updatedMovies = Data.map((movie) =>
                                movie.Id == Id ? obj : movie
                        );
                        setData(updatedMovies);
                }

                setObj({
                        Id: Date.now(),
                        Image: "",
                        Name: "",
                        Category: "",
                });

                navigate('/');
        };

        return (
                <div className="w-full h-auto py-3">
                        <h1 className="lg:w-6/12 m-auto text-2xl font-semibold my-3 text-[#f84464]">
                                {Id === undefined ? "Add Movie Data" : "Edit Movie Data"}
                        </h1>
                        <form
                                className="w-full h-90 border lg:w-6/12 gap-4 py-2 border-2 border-[#f84464] rounded-lg m-auto grid grid-cols-1 grid-rows-4"
                                onSubmit={handleSubmit}
                        >
                                {["Image", "Name", "Price", "Category"].map((field, index) => (
                                        <div
                                                key={index}
                                                className="w-full lg:w-9/12 mx-auto py-3 my-2 grid grid-cols-3 font-semibold text-sm/9"
                                        >
                                                <label>{`Movie ${field}:`}</label>
                                                <input
                                                        className="border-[1.5px] border-[#f84464] col-span-2 h-8 rounded w-11/12 m-auto"
                                                        onFocus={focus}
                                                        onBlur={blur}
                                                        value={obj[field]}
                                                        onChange={getValue}
                                                        name={field}
                                                        type="text"
                                                />
                                        </div>
                                ))}
                                <div className="w-9/12 m-auto h-10">
                                        <button
                                                className="w-4/12 transition delay-300 duration-300 ease-in-out border h-8 mt-1 rounded bg-[#f84464] text-white font-semibold text-sm hover:bg-white hover:text-[#f84464] hover:border-2"
                                        >
                                                {Id === undefined ? 'Add Movie' : 'Edit'}
                                        </button>
                                </div>
                        </form>
                </div>
        );
}

export default Moviedd;
