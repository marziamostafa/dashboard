import React from 'react'
import { GrMapLocation } from 'react-icons/gr'
import { IoMailOutline, IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { MdCropFree } from 'react-icons/md'
import { FaLaptopCode } from "react-icons/fa";

import userImage from "@/assets/navbar/user.svg";
import { IoMdAdd } from 'react-icons/io';

export default function Navbar() {
    return (
        <div className='bg-white flex  h-20 border-b border-[#cbd5e6] w-full'>


            <div className='flex-1 flex justify-between p-3 '>
                <div>
                    <input type="text" placeholder="Search" className=" text-black input focus:outline-none input-bordered w-24 md:w-auto bg-transparent border border-[#cbd5e6]" />
                </div>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-1'>
                        <button className='flex items-center gap-1 bg-amber-600 text-white px-2 py-1 rounded'><IoMdAdd /><span>Add New</span></button>
                        <button className='flex items-center gap-1 bg-blue-950 text-white px-2 py-1 rounded'><FaLaptopCode /><span>POS</span></button>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='text-black flex gap-1'>
                            <div className='bg-gray-100 p-2 rounded'>
                                <GrMapLocation />
                            </div>
                            <div className='bg-gray-100 p-2 rounded'>
                                <MdCropFree />
                            </div>
                            <div className='bg-gray-100 p-2 rounded'>
                                <IoMailOutline />
                            </div>
                            <div className='bg-gray-100 p-2 rounded'>
                                <IoNotificationsOutline />
                            </div>
                            <div className='bg-gray-100 p-2 rounded'>
                                <IoSettingsOutline />
                            </div>
                        </div>
                        <div>
                            <img src={userImage} alt=""
                                className='rounded'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
