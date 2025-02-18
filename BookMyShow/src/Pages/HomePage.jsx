import Movie from '../Components/Movie'
import Slider from '../Components/Slider'
import React from 'react'

function HomePage({ Search }) {
        return (
                <div >
                        <Slider></Slider>
                        <Movie Search={Search}></Movie>

                </div>
        )
}

export default HomePage
