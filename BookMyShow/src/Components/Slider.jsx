import React, { useEffect, useState } from 'react'
import Slide1 from '../assets/Image/slide1.jpg'
import Slide2 from '../assets/Image/slide2.jpg'

function Slider() {
        const arr = [Slide1, Slide2]
        const [index, setIndex] = useState(0)

        useEffect(() => {
                const interval = setInterval(() => {
                        setIndex((prevIndex) => (prevIndex + 1) % arr.length);
                }, 20000);

                return () => clearInterval(interval)
        }, [arr.length])


        return (
                <div className='w-full  h-auto relative py-2  '>
                        <img src={arr[index]} className='h-80 m-auto  w-[90%] rounded-xl ' alt="" />
                        <div className='h-10 w-30 absolute bottom-2  left-[45%] grid grid-cols-2  px-10 py-4'>
                                {arr.map((el, i) => {
                                        return <button key={i} onClick={() => setIndex(i)} className={`h-3 w-3 border-2 border-white rounded-full ${index == i ? 'bg-white' : ''}`}  ></button>
                                })}
                        </div>
                </div>
        )
}

export default Slider
