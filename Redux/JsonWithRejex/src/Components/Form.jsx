import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, EditData, GetData, setForm } from '../Slices/JoseSlice'

export default function Form() {
    const dispatch = useDispatch()


    const { id, products } = useSelector((state) => {
        return state.Json
    })
    const [obj, setObj] = useState({
        url: "",
        title: "",
        price: "",
        category: ""
    })

    useEffect(() => {
        dispatch(GetData())

        if (id != null) {
            const data = products.find(el => el.id == id)
            if (data) {
                setObj(data)
            }
        }

    }, [dispatch, id])




    const chang = (e) => {
        const { value, name } = e.target

        setObj({ ...obj, [name]: value })
    }

    const addData = (p) => {
        p.preventDefault()

        if (id != null) {
            dispatch(EditData({ ...obj, id: id }))
        } else {
            dispatch(AddData(obj));
        }
        setObj
            ({
                url: "",
                title: "",
                price: "",
                category: ""
            })
        dispatch(setForm(false))
    }
    return (
        <div className='grid grid-rows-4 border-2 border-pink-600 h-112 w-full lg:w-6/12 m-auto '>
            <h1 className='  text-2xl font-semibold py-6 px-6 '>Product Form</h1>
            <form action="" onSubmit={addData} className=' row-span-4 grid-rows-5 w-full lg:w-10/12 m-auto h-full grid gap-3'>
                <input type="text" className='border-[1.5px] border-pink-600 text-white placeholder:text-white h-9 rounded-md px-3 w-11/12 m-auto my-1' value={obj.url} name="url" onChange={chang} placeholder='Enter Product image Url' />
                <input type="text" className='border-[1.5px] border-pink-600 text-white placeholder:text-white h-9 rounded-md px-3 w-11/12 m-auto my-1' value={obj.title} name="title" onChange={chang} placeholder='Enter Product Title ' />
                <input type="text" className='border-[1.5px] border-pink-600 text-white placeholder:text-white h-9 rounded-md px-3 w-11/12 m-auto my-1' value={obj.price} name="price" onChange={chang} placeholder='Enter Product Price' />
                <input type="text" className='border-[1.5px] border-pink-600 text-white placeholder:text-white h-9 rounded-md px-3 w-11/12 m-auto my-1' value={obj.category} name="category" onChange={chang} placeholder='Enter Product Category' />
                <button type="submit" className='border-[1.5px] h-9 rounded-md px-3 w-4/12 mx-6 my-1 border-pink-600 font-semibold hover:bg-transparent bg-pink-600'>Submit</button>

            </form></div>
    )
}
