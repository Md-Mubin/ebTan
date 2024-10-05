import React from 'react'

const Subscribe = () => {
    return (
        <>
        <section className='w-full bg-[#ecebe6] py-10 lg:py-20'>
            <ul className='container flex flex-wrap lg:flex-nowrap gap-4 lg:gap-0 items-center justify-between'>
                <li className='w-full lg:w-[356px] font-ptSerif font-normal text-normal text-4xl lg:text-start text-center lg:text-5xl text-commonColor leading-[125%]'>Subscribe to the daily <span className='text-brandColor'>updates</span></li>

                <li className='w-full lg:w-[700px] h-[60px] lg:h-[92px] border border-[#A0A79A] rounded-full flex items-center justify-between px-5'>
                    <input type="email" placeholder='Enter your email address' className='bg-transparent w-[400px] outline-none' />
                    <button className='px-[13px] h-[40px] lg:h-[52px] bg-brandColor font-inter font-medium text-[10px] lg:text-lg text-white leading-[145%] rounded-full'>Subscribe now</button>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Subscribe