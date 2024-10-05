// ===================== All Imports
import React        from 'react'
import { IoMdStar } from 'react-icons/io'

const CommonReview = ({reviewerName}) => {
    return (
        <>
            {/* ================== Common Review Part ================== */}
            <ul className='w-full lg:w-[441px]'>

                {/* ---------- star part ---------- */}
                <li className='flex gap-[25px] text-3xl lg:text-[41px] text-[#F2994A] justify-center'>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                </li>
                <li className='font-ptSerif font-normal text-sm lg:text-xl text-brandColor text-center leading-[130%] my-[13px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </li>

                {/* ---------- reviewer name part ---------- */}
                <li className='font-ptSerif font-normal text-2xl lg:text-4xl text-commonColor leading-[145%] text-center'>
                    {reviewerName}
                </li>

                {/* ---------- reviewer passion part ---------- */}
                <li className='font-ptSerif font-normal text-[#F2994A] text-xl text-center'>Actor</li>
            </ul>
        </>
    )
}

export default CommonReview