import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const CommonToggle = ({ info, infoHead }) => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <ul onClick={handleShow} className='w-[180px]'>
                <li className='flex items-center gap-[10px] group cursor-pointer'>
                    <MdOutlineArrowDropDown className='text-4xl text-commonColor' />
                    <p className='font-inter font-semibold text-[22px] text-commonColor leading-[130%] group-hover:text-brandColor duration-200'>{info}</p>
                </li>

                {
                    show &&
                    <li className='w-[300px] p-4 border border-brandColor rounded-xl text-center toggleinfos ml-10'>
                        <h2 className='font-inter font-bold text-xl text-commonColor'>{infoHead}</h2>
                        <p className='font-ptSerif font-normal text-md mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                }
            </ul>

        </>
    )
}

export default CommonToggle