import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Api } from '../Slices/ApiSlice'

export default function Data() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Api())
    }, [dispatch])

    const Data = useSelector((state) => {

        return state.ApiReduces
    })
    console.log(Data);
    if (Data.loding == true) {
        return <p>Loading...</p>
    }
    return (
        <>
            <h1>Product</h1>
            <div>
                {
                    Data && Data.data.map((el, index) => (
                        <div key={index}>
                            <img src={el.thumbnail} alt="" />
                            <p>{el.title}</p> </div>
                    ))
                }
            </div>
        </>
    )
}

