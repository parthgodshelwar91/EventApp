import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { MdCurrencyExchange, MdOutlineDashboardCustomize } from "react-icons/md";
import { SiSecurityscorecard } from "react-icons/si";
import { GrHomeRounded } from "react-icons/gr";
import { CiUser } from "react-icons/ci";

function UserSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleButton() {
    alert("logout successfully");
  }

  return (
    <>
      {/* small device */}
      <div className="md:hidden">
        <div className="flex justify-between items-center py-4 px-4 bg-gray-900 text-white">
          <div className="text-3xl text-red-500">EventApp</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center rounded-md text-sm font-semibold text-white hover:bg-white hover:text-black px-2 py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="bg-gray-900 text-white">
            <ul className="sidebar-menu flex flex-col items-center">
              <Link to="/">
                <li className="flex text-2xl items-center py-4 hover:bg-slate-400 hover:text-black cursor-pointer w-full">
                  <div className="logo-image h-6 w-auto mx-2"><GrHomeRounded /></div>
                  Home
                </li>
              </Link>
              <Link to="/booking">
                <li className="flex text-2xl items-center py-4 hover:bg-slate-400 hover:text-black cursor-pointer w-full">
                  <div className="logo-image h-6 w-auto mx-2">
                    <MdCurrencyExchange />
                  </div>
                  Book Event
                </li>
              </Link>
              <Link to="/status">
                <li className="flex text-2xl items-center py-4 hover:bg-slate-400 hover:text-black cursor-pointer w-full">
                  <div className="logo-image h-6 w-auto mx-2">
                    <SiSecurityscorecard />
                  </div>
                  Booking status
                </li>
              </Link>
              <button
                onClick={handleButton}
                type="button"
                className="inline-flex items-center rounded-md text-sm font-semibold text-white hover:bg-white hover:text-black px-4 py-2 w-full"
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
            </ul>
          </div>
        )}
      </div>

      {/* large device */}
      <div className="hidden md:flex md:flex-col bg-gray-900 text-white w-64 h-screen">
        <div className="sidebar-header text-3xl text-red-500 flex items-center justify-center py-4">
          <img className="logo-image h-8 w-auto mr-2" /* src={logo} */ /> EventApp
        </div>
        <ul className="sidebar-menu flex-1 pt-8">
          <Link to="/">
            <li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
              <div className="logo-image h-6 w-auto mr-6"><GrHomeRounded /></div>
              Home
            </li>
          </Link>
          <Link to="/booking">
            <li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
              <div className="logo-image h-6 w-auto mr-6">
                <MdCurrencyExchange />
              </div>
              Book Event
            </li>
          </Link>
          <Link to="/status">
            <li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
              <div className="logo-image h-6 w-auto mr-6">
                <SiSecurityscorecard />
              </div>
              Booking status
            </li>
          </Link>
          <Link to="/forgotpassword">
            <li className="flex text-2xl items-center py-4 px-4 hover:bg-slate-400 hover:text-black cursor-pointer">
              <div className="logo-image h-6 w-auto mr-6">
                <SiSecurityscorecard />
              </div>
              Authentication
            </li>
          </Link>
        </ul>
        <div>
          <button
            onClick={handleButton}
            type="button"
            className="inline-flex items-center rounded-md bg-black text-sm font-semibold text-white hover:bg-white hover:text-black px-4 py-6 m-4 border-white border-2 "
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
    </>
  );
}

export default UserSidebar;