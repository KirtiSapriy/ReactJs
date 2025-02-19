import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Logo from '../assets/Image/Logo.png';
import { Search, Close } from '@mui/icons-material';

const Header = ({ setSearch, search }) => {
  return (
    <header>
      <div className="shadow-md h-14 grid grid-cols-3">
        <div className="col-span-2 flex items-center justify-center">
          <div className="flex justify-evenly w-2/12 items-center h-full">
            <img src={Logo} className="w-10/12" alt="BookMyShow Logo" />
          </div>
          <div className="flex w-8/12 h-full items-center relative ps-2">
            <input
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              type="text"
              className="border w-110 px-8 h-8 rounded border-[#e5e5e5]" value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="text-[#777777] left-3 absolute" />
            {search.length != 0 ? < Close onClick={() => setSearch("")} className='absolute right-30' /> : ""
            }</div>
        </div>

        <div className="grid grid-cols-2 py-3">
          <select className="mx-4 rounded h-8 border ">
            <option value="Select City">Select City</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
          </select>
          <div className="h-8">
            <Link to="/addProducts">
              <button className="w-8/12 h-8 rounded bg-[#f84464] mx-7 text-white font-semibold">
                Add Movie
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-10 bg-[#f5f5f5] flex justify-center">
        <div className="w-10/12 flex justify-between items-center">
          <ul className="flex space-x-6 font-normal">
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">Stream</li>
            <li className="cursor-pointer">Events</li>
            <li className="cursor-pointer">Plays</li>
            <li className="cursor-pointer">Sports</li>
            <li className="cursor-pointer">Activities</li>
          </ul>
          <ul className="flex space-x-4 text-sm font-normal">
            <li className="cursor-pointer">ListYourShow</li>
            <li className="cursor-pointer">Corporates</li>
            <li className="cursor-pointer">Offers</li>
            <li className="cursor-pointer">Gift Cards</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
