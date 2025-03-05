import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, upData } from '../Curdslice/Curdslice'

export default function Todolist() {

    const Data = useSelector((state) => {
        return state.CURD.todoData
    })
    const Dispatch = useDispatch()

    const [inData, setInData] = useState("")
    const [index, setIndex] = useState(null)
    const addTask = () => {
        if (index == null) {
            const obj = {
                id: Date.now(), inData
            }

            Dispatch(AddData(obj))
        }
        else {
            Dispatch(upData({ index, inData }))

        }
        setInData("")
        setIndex(null)

    }
    const Edit = (id) => {

        let sing = Data.find((el) => el.id == id)
        setIndex(sing.id)
        setInData(sing.inData)

    }
    return (
        <div className='w-full lg:w-6/12 border h-auto m-auto my-19'>
            <h1 className='text-2xl w-10/12 m-auto my-4 font-semibold'>Todolist</h1>
            <div className='h-20 grid place-items-center gap-3 w-9/12 m-auto grid-cols-4'>
                <input type="" placeholder='Enter Task' value={inData} onChange={(e) => setInData(e.target.value)} className='border h-9 col-span-3 w-full p-2  rounded-md  ' />
                <button className='h-9 w-full border rounded-md capitalize bg-white text-black font-semibold' onClick={() => addTask()}>{index == null ? "add" : "update"}</button>
            </div>
            <div className='w-full border h-auto'>
                <table className='sm:w-11/12 lg:w-9/12 border m-auto'>
                    <tbody className='w-11/12 '>
                        {
                            Data.length != 0 ?
                                Data.map((el, i) => {
                                    return (
                                        <tr key={i} className=' h-12 w-full border grid grid-cols-4   Fgap-3'>
                                            <td className=' grid place-items-center'><input type="checkbox" name="" className='' id="" /></td>
                                            <td className=' grid place-items-center capitalize text-md'>{el.inData}</td>
                                            <td className=' grid place-items-center'><button className='capitalize text-md h-9/12 w-11/12 rounded bg-green-600 font-semibold' onClick={() => { Edit(el.id) }}>add</button></td>
                                            <td className=' grid place-items-center'><button className='capitalize text-md h-9/12 w-11/12 rounded bg-red-600 font-semibold' onClick={() => Dispatch(DeleteData(el.id))}>delete</button></td>
                                        </tr>)
                                }) : ""
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
