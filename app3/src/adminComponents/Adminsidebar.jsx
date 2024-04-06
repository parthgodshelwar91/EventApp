import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCurrencyExchange, MdOutlineDashboardCustomize } from "react-icons/md";
import { SiSecurityscorecard } from "react-icons/si";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser } from "react-icons/ci";

function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    function handleButton() {
        alert("logout successfully");
    }

    return (
        <div className="flex h-screen">
            <div className="sidebar flex flex-col bg-gray-900 text-white w-64">
                <div className="sidebar-header text-3xl text-red-500 flex items-center justify-center py-4">
                    <img className="logo-image h-8 w-auto mr-2" /* src={logo} */ />
                    EventApp
                </div>
                <div className='flex items-center'>
                    <CiUser
                        className="mt-2 ml-6 size-8"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                    <h1
                        className={`text-white ml-8 text-lg font-semibold ${isHovered ? 'visible' : 'hidden'}`}
                    >
                        pratik kalghuge
                        pune
                    </h1>
                </div>
                <ul className="sidebar-menu flex-1 pt-8">
                <Link to="/"><li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                        <div className="logo-image h-6 w-auto mr-6"><GrHomeRounded /></div>
                        Dashboard
                    </li></Link>
                    <li className="relative" onClick={toggleDropdown}>
                        <div className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                            <div className="logo-image h-6 w-auto mr-6"><MdOutlineDashboardCustomize /></div>
                            Masters
                        </div>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu absolute bg-gray-800 text-white py-2 mt-2 w-full z-10" onClick={(e) => e.stopPropagation()}>
                                 <li className="dropdown-item block px-8 hover:bg-slate-400 hover:text-black py-2 font-semibold border-b-2"><Link to="/addvenue">Add venue</Link></li>
                                <li className="dropdown-item block px-8 hover:bg-slate-400 hover:text-black py-2 font-semibold border-b-2"><Link to="/addequip">Add Equipment</Link></li>
                                <li className="dropdown-item block px-8 hover:bg-slate-400 hover:text-black py-2 font-semibold border-b-2"><Link to="/addfood">Add Food</Link></li>
                                <li className="dropdown-item block px-8 hover:bg-slate-400 hover:text-black py-2 font-semibold border-b-2"><Link to="/addlights">Add Lightning</Link></li>
                                <li className="dropdown-item block px-8 hover:bg-slate-400 hover:text-black py-2 font-semibold border-b-2"><Link to="/addflowers">Add Flowers</Link></li>
                                <li className="dropdown-item block px-8 hover:bg-slate-400 hover:text-black py-2 font-semibold border-b-2"><Link to="/approval">Approval</Link></li>
                                <li className="dropdown-item block px-8 hover:bg-slate-400 hover:text-black py-2 font-semibold border-b-2"><Link to="/bookingsearch">Booking Search</Link></li>
                            </ul>
                        )}
                    </li>
                    <div
                        className={`transition-transform duration-300 ${isDropdownOpen ? 'translate-y-[300px]' : '' }`}
                    >
                        <li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                            <div className="logo-image h-6 w-auto mr-6"> <MdCurrencyExchange /></div>
                            Transactions
                        </li>
                        <Link to="/forgotpassword"><li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                            <div className="logo-image h-6 w-auto mr-6"> <SiSecurityscorecard /></div>
                            Authentication
                        </li></Link>
                    </div>
                </ul>
                <div className="sidebar-below mt-8">
                    <button
                        onClick={handleButton}
                        type="button"
                        className="sidebar-user py-2 px-10 my-8 mx-6 h-[50px]  inline-flex items-center rounded-md bg-black  text-sm font-semibold text-white hover:bg-white hover:text-black"
                    >
                        Logout
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 h-4 w-4"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-1 bg-gray-100">
                {/* Content goes here */}
            </div>
        </div>
    );
}

export default Sidebar;