// ===================== All Imports
import React        from 'react'
import CommonReview from '../../Commons/CommonReview'

const Review = () => {
    return (
        <>
            {/* ================== Review Section ================== */}
            <section className='lg:mt-[142px] lg:mb-[120px] my-[50px]'>
                <ul className='container'>
                    <h1 className='font-ptSerif font-normal text-4xl lg:text-5xl text-brandColor text-center'>Review</h1>
                    <p className='w-full lg:w-[526px] m-auto lg:mt-[21px] lg:mb-[90px] my-[20px] text-center text-[#A0A79A] font-inter font-medium text-lg leading-[145%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    <li className='flex flex-wrap gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between '>
                        <CommonReview reviewerName={"Ebrahim Ahmed"}/>
                        <CommonReview reviewerName={"Tanvir Shantoh"}/>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Review