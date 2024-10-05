// ===================== All Imports
import React               from 'react'
import { FaFacebook }      from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { SiTelegram }      from 'react-icons/si'
import { Link }            from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* ================== Footer Section ================== */}
      <footer className='w-full bg-brandColor py-5 lg:pt-[64px] lg:pb-[66px]'>
        <ul className='container'>

          {/* -------- Footer Head -------- */}
          <li className='font-inter font-black text-[34px] text-white leading-[125%] text-center'>
            EbTan Cosmetics
          </li>

          {/* -------- Footer Links -------- */}
          <li className='font-inter font-medium text-lg text-white leading-[64%] flex flex-wrap justify-center flew-wrap gap-[33px] mt-[43px] mb-[50px] '>
            <Link to="#">Home</Link>
            <Link to="#">About us</Link>
            <Link to="#">Product</Link>
            <Link to="#">Contact</Link>
          </li>

          {/* -------- Footer Social Links Part -------- */}
          <li className='flex gap-[29px] text-3xl text-white justify-center'>
            <Link to={"#"}><RiInstagramFill /></Link>
            <Link to={"#"}><SiTelegram /></Link>
            <Link to={"#"}><FaFacebook /></Link>
          </li>

          {/* -------- Footer Rights -------- */}
          <li className='font-inter font-medium text-lg text-white leading-[125%] mt-[19px] text-center'>
            © 2024 All Rights Reserved.
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer