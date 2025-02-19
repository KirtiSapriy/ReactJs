import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Movie({ Search }) {
        const [Data, setData] = useState(JSON.parse(localStorage.getItem("MovieData")) || [])
        const [filterdata, setFilterdata] = useState([])
        const [Sort, setSort] = useState("all")
        const [Filter, setFilter] = useState("all")
        let data = [...Data]

        useEffect(() => {


                if (Search.length > 0) {
                        data = Data.filter((el) => el.Name.toLowerCase().includes(Search.toLowerCase()))
                }
                if (Filter != "all") {
                        data = data.filter((el) => el.Category.toLowerCase().includes(Filter.toLowerCase()))
                }
                if (Sort != "all") {
                        if (Sort == "a-z") {
                                data = data.sort((a, b) => a.Name.localeCompare(b.Name))
                        }
                        if (Sort == "z-a") {
                                data = data.sort((a, b) => b.Name.localeCompare(a.Name))
                        }
                        if (Sort == "peice low-high") {
                                data = data.sort((a, b) => a.Price - b.Price)
                        }
                        if (Sort == "peice high-low") {
                                data = data.sort((a, b) => b.Price - a.Price)
                        }
                }



                setFilterdata(data)




        }, [Data, Search, Filter, Sort])






        const Delete = (id) => {
                let data = Data.filter((el, i) => { return el.Id != id })

                localStorage.setItem("MovieData", JSON.stringify(data))
                setData(data)
        }
        return (
                <div className='w-full'>

                        <div className='h-11 my-2 w-11/12 mx-auto grid grid-cols-2 '>
                                <div className='h-11/12 w-6/12  my-auto place-self-start py-1 px-3  grid grid-cols-4'><span className='place-self-start my-1'>Sort :</span>
                                        <select className='col-span-3 capitalize border-[1.4px] px-2 py-1 rounded   border-[#e6364d]   ' onChange={(e) => setSort(e.target.value)} >
                                                <optgroup label='Sort Option' className=''  >
                                                        <option value="All">all</option>
                                                        <option value="a-z">a-z</option>
                                                        <option value="z-a">z-a</option>
                                                        <option value="peice low-high">peice low to high</option>
                                                        <option value="peice high-low">peice high to low </option>


                                                </optgroup></select></div>
                                <div className='h-11/12 w-6/12  my-auto place-self-end py-1 px-3 grid grid-cols-4'><span className='place-self-start my-1'>Filter :</span>
                                        <select className='col-span-3 capitalize border-[1.4px] px-2 py-1 rounded  border-[#e6364d]    ' onChange={(e) => setFilter(e.target.value)} >
                                                <optgroup label='Sort Option' className=''  >
                                                        <option value="all">all</option>
                                                        <option value="comedy">comedy</option>
                                                        <option value="drama">drama</option>
                                                        <option value="horror">horror</option>
                                                        <option value="historical">historical </option>
                                                        <option value="action">action </option>
                                                        <option value="adventure">adventure </option>



                                                </optgroup></select>
                                </div>
                        </div>
                        <div className='grid w-11/12 x h-auto grid-cols-5  gap-8 m-auto overflow-x-scroll '>
                                {
                                        filterdata.length == 0 ? <p>Data  Not Found</p> : filterdata.map((el, i) => {
                                                return (
                                                        <div className='rounded-lg grid grid-row-3 gap-2 ' key={el.Id}>
                                                                <div className='h-80 overflow-hidden rounded-lg '>
                                                                        <img src={el.Image} className='h-full w-full' alt="" />
                                                                </div>
                                                                <div className='h-25 capitalize  w-full  '>
                                                                        <h2 className='text-lg capitalize font-semibold '>{el.Name}</h2>
                                                                        <p className='text-[15px] text-[#999999]'>{el.Category}</p>
                                                                        <p>{el.Price}</p>
                                                                </div>
                                                                <div className='h-10 grid  grid-cols-2  gap-2'>
                                                                        <Link to={`addProducts/${el.Id}`}>
                                                                                <button className=' bg-[#ff2d50] w-11/12 h-11/12 text-sm font-semibold text-white rounded' >Edit</button>
                                                                        </Link>
                                                                        <button className=' bg-[#8888] h-11/12 text-sm font-semibold text-white rounded' onClick={() => { Delete(el.Id) }}>Delete</button></div>
                                                        </div >)

                                        })}
                        </div>
                </div >
        )
}

export default Movie 
