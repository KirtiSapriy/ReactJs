import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dec, Inc, Reset } from '../Slice/counterSlice'

function Couter() {
    const count = useSelector((state) => {
        return state.counterReducer.count
    })
    const dispatch = useDispatch()
    return (
        <>
            <div className='h-60 m-auto grid grid-cols-1 grid-rows-2 gap-4 p-4 my-30 w-100 border-2 rounded-lg shadow-lg'>
                <h1 className=' text-5xl font-semibold text-center grid place-items-center'>{count}</h1>
                <div className='  font-semibold text-center grid grid-cols-3 gap-6 place-items-center'>
                    <button className='h-10 w-full text-2xl border rounded' onClick={() => dispatch(Dec())}>-</button>
                    <button className='h-10 w-full border rounded' onClick={() => dispatch(Reset())}>Reset</button>
                    <button className='h-10 w-full text-2xl border rounded' onClick={() => dispatch(Inc())}>+</button>

                </div>
            </div>

        </>
    )
}

export default Couter