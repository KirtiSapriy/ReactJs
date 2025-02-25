import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData, GetData, setForm, setId } from '../Slices/JoseSlice'

export default function Products() {

    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(GetData())
    }, [dispacth])
    const data = useSelector((state) => {
        return state.Json
    })
    const Delete = (id) => {
        dispacth(DeleteData(id))
    }

    const edit = (id) => {
        dispacth(setId(id))
        dispacth(setForm(true))
    }


    return (
        <div className='w-11/12 m-auto h-auto grid grid-cols-5 gap-4'>
            {
                data.loading == true ? <p>Loading</p> : data.products.length == 0 ? <p>Data not found </p> : data.products.length != 0 ? data.products.map((el) => {
                    return (<div key={el.id} className='h-96 border rounded-lg hover:shadow-[3px_5px_13px_rgba(255,255,255,0.6)]'>
                        <div className='h-8/12 rounded border'><img src={el.url} alt={el.url} className='w-full h-full' /></div>
                        <div className='grid grid-rows-5 gap-2 border h-4/12 px-2' >
                            < h1 className='font-semibold truncate' > {el.title}</h1>
                            <p>{el.price}</p>
                            <p>{el.category}</p>
                            <div className='row-span-2 grid gap-3 grid-cols-2'>
                                <button className='capitalize bg-[#009950] border-[#009950] hover:bg-transparent border-2 text-white rounded my-2' onClick={() => { edit(el.id) }}>add</button>
                                <button className='capitalize rounded bg-[#ff000080] border-2 border-[#ff0000] hover:bg-transparent text-white  my-2' onClick={() => Delete(el.id)}>delete</button>
                            </div>                 </div></div>)
                }) : <p>{data.error}</p>
            }
        </div >
    )
}
