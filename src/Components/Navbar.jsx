import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";

function Navbar() {


    return (
        <>
            <div className='h-28 w-fullcontainer-fluid sticky top-0 bg-white p-4 sm:p-6 flex justify-between items-center transition-all duration-500 xl:h-20 z-50 shadow-md'>
                <div>
                    <img src="/Images/logo.webp" alt="loading" className='h-16 w-16 m-5' />
                </div>
                <div>
                    <ul className='flex justify-between space-x-16'>
                        <li className>
                            <a href="" className='hover:text-[#4874BA]' >Politics</a></li>
                        <li><a href="" className='hover: border-b-4' >Business</a></li>
                        <li><a href="" className='hover: border-b-4' >World</a></li>
                        <li><a href="" className='hover: border-b-4' >Sports</a></li>
                        <li><a href="" className='hover: border-b-4' >Travel</a></li>
                    </ul>
                </div>
                <div>
                    <CgProfile className='h-10 w-10' />
                </div>
            </div>
        </>
    )
}

export default Navbar