import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, editData, getItems, postData } from '../Slices/JSonPost'

export default function JsonData() {
    const data = useSelector((state) => {
        return state.Json
    })
    const dispacth = useDispatch()
    console.log(data);
    const [update, setUpdate] = useState(false)

    const [obj, setobj] = useState({
        id: Date.now(),
        name: "",
        email: "",
        password: ""
    })
    const setData = (e) => {
        const { value, name } = e.target

        setobj({ ...obj, [name]: value })
    }
    const submit = (p) => {
        p.preventDefault();

        if (update) {
            dispacth(editData({ id: obj.id, newData: obj }));
            setUpdate(false);
        } else {
            dispacth(postData({ name: obj.name, email: obj.email, password: obj.password }));
        }

        setobj({ name: "", email: "", password: "" });
    };

    const Delete = (id) => {

        dispacth(deleteData(id))
    }
    const edit = (id) => {
        let newdata = data.data.find((el) => el.id == id)
        setUpdate(true)
        console.log();

        setobj(newdata)

    }
    useEffect(() => {
        dispacth(getItems())
    }, [dispacth])

    return (
        <div>
            <div>
                <form action="" method="post" onSubmit={submit}>
                    <input type="text" onChange={setData} value={obj.name} name='name' placeholder='Enter name' />
                    <input type="text" onChange={setData} value={obj.email} name='email' placeholder='Enter Email' />
                    <input type="text" onChange={setData} value={obj.password} name='password' placeholder='Enter password' />
                    <button type="submit">{update == true ? "Update" : "submit"}</button>
                </form>
            </div>{
                data.loading == true ? <p>Loading</p> : data.error != null ? <p>{data.error}</p>
                    : data.data.length != 0 ? data.data.map((el) => {
                        return (<div key={el.id}>
                            <h1>{el.name}</h1>
                            <p>{el.email}</p>
                            <p>{el.password}</p>
                            <button onClick={() => edit(el.id)}>add</button>
                            <button onClick={() => Delete(el.id)}>Delete</button>
                        </div>)
                    }) : data.data.length == 0 ? <p>Data Not Found</p> : ""
            }

        </div>
    )
}
