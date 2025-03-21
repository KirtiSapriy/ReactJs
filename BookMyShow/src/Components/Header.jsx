import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Image/Logo.png';
import { Search, Close, Menu } from '@mui/icons-material';

const Header = ({ setSearch, search }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="shadow-md h-14 grid grid-cols-3 items-center px-4 md:px-10 relative">
        <div className="flex items-center">
          <button className="lg:hidden mx-2 " onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="text-2xl" />
          </button>
          <img src={Logo} className="w-10/12 lg:w-4/12 ml-4 md:ml-0" alt="BookMyShow Logo" />
        </div>
        <div className="hidden md:flex w-8/12 items-center relative ps-2">
          <input
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            type="text"
            className="border w-full px-8 h-8 rounded border-[#e5e5e5]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="text-[#777777] left-3 absolute" />
          {search.length !== 0 && <Close onClick={() => setSearch('')} className='absolute right-4 cursor-pointer' />}
        </div>
        <div className="flex items-center space-x-4 w-80 lg:w-auto px-40">
          <select className="rounded h-8 border hidden lg:flex">
            <option value="Select City">Select City</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
          </select>
          <Link to="/addProducts" >
            <button className="h-8 w-50  lg:w-auto rounded bg-[#f84464] text-white px-4 font-semibold">
              Add Movie
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 z-40 lg:hidden">
          <ul className="flex flex-col space-y-2">
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">Stream</li>
            <li className="cursor-pointer">Events</li>
            <li className="cursor-pointer">Plays</li>
            <li className="cursor-pointer">Sports</li>
            <li className="cursor-pointer">Activities</li>
          </ul>
          <ul className="flex flex-col space-y-2 text-sm">
            <li className="cursor-pointer">List Your Show</li>
            <li className="cursor-pointer">Corporates</li>
            <li className="cursor-pointer">Offers</li>
            <li className="cursor-pointer">Gift Cards</li>
          </ul>
        </div>
      )}

      <div className="hidden lg:flex h-10 bg-[#f5f5f5] justify-center">
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
            <li className="cursor-pointer">List Your Show</li>
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