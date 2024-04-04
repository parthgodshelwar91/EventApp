import React from 'react'
import { DefaultContext } from 'react-icons';
import Homedata from './Homedata';
import { CiMail,CiShoppingCart,CiTwitter } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiCreditCard2 } from "react-icons/ci";
import { MdCancelPresentation ,MdOutlinePresentToAll } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
function Home() {
  return (
    <>
    <div class="flex flex-wrap justify-around gap-20 mt-[50px]">
    <div id="over-card1" class="over-card border-2 border-black text-black h-[200px] w-[200px] text-center rounded-lg shadow-xl cursor-pointer ">
        <CiMail class="my-6 w-10 h-10 ml-16  " />
        <h2 class="text-xl mb-1 ">Subscribers</h2>
        <p className='text-xl mt-4'><b>450</b></p>
    </div>
    <div id="over-card2" class="over-card border-2 border-yellow-400 w-[200px] text-center rounded-lg shadow-xl">
        <CiTwitter class="my-6 w-10 h-10 ml-16  " />
        <h2 class="text-xl mb-1">Followers</h2>
        <p className='text-xl mt-4'><b>500</b></p>
    </div>
    <div id="over-card3" class="over-card border-2 border-red-500 w-[200px] text-center rounded-lg shadow-xl">
        <IoBagRemoveOutline class="my-6 w-10 h-10 ml-16  " />
        <h2 class="text-xl mb-1">Business Plan</h2>
        <p className='text-xl mt-4'>--</p>
    </div>
    <div id="over-card4" class="over-card border-2 border-green-500 w-[200px] text-center rounded-lg shadow-xl">
        <CiShoppingCart class="my-6 w-10 h-10 ml-16  " />
        <h2 class="text-xl mb-1">New Orders</h2>
        <p className='text-xl mt-4'><b>10</b></p>
    </div>
</div>
{/*  */}

<div className='flex flex-row flex-wrap justify-between px-[200px] mt-[100px]'>

    <div className="pay-card border shadow-lg border-gray-300 rounded-lg m-5 p-4  flex items-center justify-between hover:border-black w-[200px]">
        <div className="pay-info">
            <p className="text-xl font-bold">582</p>
            <p>Total invoices</p>
        </div>
        <CiCreditCard2 className="h-10 w-10 text-[#FF4A00]"/>
    </div>

    <div className="pay-card border shadow-lg border-gray-300 rounded-lg m-5 p-4 w-[200px] flex items-center justify-between hover:border-black">
        <div className="pay-info">
            <p className="text-xl font-bold">346</p>
            <p>paid invoices</p>
        </div>
        <TbNotes className="h-10 w-10 text-[#62D493]"/>
    </div>

    <div className="pay-card border shadow-lg border-gray-300 rounded-lg m-5 p-4 w-[200px] flex items-center justify-between hover:border-black">
        <div className="pay-info">
            <p className="text-xl font-bold">236</p>
            <p>Total unpaid</p>
        </div>
        <MdCancelPresentation className="h-10 w-10 text-[#FF4961]"/>
    </div>

    <div className="pay-card border shadow-lg border-gray-300 rounded-lg m-5 p-4 w-[200px] flex items-center justify-between hover:border-black">
        <div className="pay-info">
            <p className="text-xl font-bold">126</p>
            <p>Total sent</p>
        </div>
        <MdOutlinePresentToAll className="h-10 w-10 size-2 text-[#F4AB55]"/>
    </div>
</div>
    <Homedata/>

    
    </>
  )
}

export default Home
