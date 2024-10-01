// ===================== All Imports
import React                 from 'react'
import CountUp               from 'react-countup'
import CommonHead            from '../../Commons/CommonHead'
import CommonRates           from '../../Commons/CommonRates'
import CommonButton          from '../../Commons/CommonButton'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { RiShoppingBagFill } from 'react-icons/ri'
import { HiMiniFaceSmile }   from 'react-icons/hi2'

const Handwash = () => {
    return (
        <>
            {/* ================== Hand Wash Section ================== */}
            <section className='w-full bg-[#ECEBE6] pt-[50px] lg:pt-[110px] lg:pb-[149px]'>
                <div className="container flex flex-col lg:flex-row lg:justify-between items-center">

                    {/* -------- Hand Wash Informations -------- */}
                    <ul className='flex flex-col items-center'>

                        <li><CommonHead commonHeading={"All skins types"} /></li>

                        {/* counters */}
                        <li className='flex gap-10 xl:gap-20 flex-wrap justify-center lg:justify-start mt-10 xl:mt-0'>
                            <CommonRates countIcon={<BsFillBoxSeamFill />} countNumber={<CountUp end={48} />}  countText={"Products"} />
                            <CommonRates countIcon={<RiShoppingBagFill />} countNumber={<CountUp end={200} />} plusSign={"+"} countText={"Product solds"} />
                            <CommonRates countIcon={<HiMiniFaceSmile />}   countNumber={<CountUp end={99} />}  plusSign={"+"} countText={"Review"} />
                        </li>

                        <li className='text-center lg:text-start font-ptSerif font-normal text-[36px] text-brandColor leading-[130%] mt-10'>Men's Hand wash  lorem</li>

                        {/* price & add to cart part */}
                        <li className='flex items-center gap-5 mt-5 lg:mt-[114px]'>
                            <CommonButton />
                            <span className='font-ptSerif font-normal text-2xl lg:text-[31px] text-brandColor leading-[145%]'>৳ 700</span>
                        </li>
                    </ul>

                    {/* -------- Hand Wash Image -------- */}
                    <ul className='mt-10 lg:mt-0 pl-8 lg:pl-0'>
                        <img src="images/hand_wash_image.png" alt="hand_wash_image" />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Handwash