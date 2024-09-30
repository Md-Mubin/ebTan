// ===================== All Imports
import React, { useState } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'

const Navbar = () => {

    // for toggle method
    const [navItems, setNavItems] = useState(false)

    // for toggle Navbar
    const toggleNav = () => {
        setNavItems(!navItems)
    }

    // for toggle the nav button => (ln-38 ; col-44)
    const styleNavbutton = {
        transform: navItems ? "rotate(-360deg)" : "rotate(180deg)"
    }

    // for toggle the nav => (ln-41 ; col-29)
    const styleNav = {
        transform: navItems ? "translateX(-120px)" : "translateX(50px)",
        opacity : navItems? "1" : "0"
    }

    return (
        <>
            {/* ================== Navbar Part ================== */}
            <nav className='container pt-[33px]'>
                <ul className='flex justify-between items-center'>

                    {/* --------- logo image --------- */}
                    <img src="images/logo.png" alt="logo_image" />

                    <li className='relative'>

                        {/* --------- bar icon --------- */}
                        <HiBars3BottomLeft style={styleNavbutton} onClick={toggleNav} className="text-4xl duration-500 cursor-pointer" />

                        {/* toggle effect */}
                        <ul style={styleNav} className="w-[150px] flex flex-col items-center gap-3 py-4 bg-[#ff9d9da8] absolute duration-500 rounded-2xl">

                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Home</button>
                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>About us</button>
                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Product</button>
                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Contact</button>
                        </ul>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar