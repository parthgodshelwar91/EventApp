import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCurrencyExchange, MdOutlineDashboardCustomize } from "react-icons/md";
import { SiSecurityscorecard } from "react-icons/si";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
function Sidebar() {
    function handleButton(){
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
                    
                    />
                        <h1
                            className={`text-white ml-8 text-lg font-semibold `}
                        >
                            pratik kalghuge
                            
                        </h1>
                    </div>
                <ul className="sidebar-menu flex-1 pt-8">
                    <Link to="/"><li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                        <div className="logo-image h-6 w-auto mr-6"><GrHomeRounded /></div>
                        Home
                    </li></Link>
                    
                    <Link to="/booking"><li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                        <div className="logo-image h-6 w-auto mr-6"> <MdCurrencyExchange /></div>
                        Book Event
                    </li></Link>
                    <Link to="/status"><li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                        <div className="logo-image h-6 w-auto mr-6"> <SiSecurityscorecard /></div>
                        Booking status
                    </li></Link>
                    <Link to="/forgotpassword"><li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
                            <div className="logo-image h-6 w-auto mr-6"> <SiSecurityscorecard /></div>
                            Authentication
                        </li></Link>
                </ul>
                <div className="sidebar-below">
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
                
            </div>
        </div>
    );
}

export default Sidebar;
