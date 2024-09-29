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
        <section className='w-full bg-[#ECEBE6] pt-[110px] pb-[149px]'>
            <div className="container flex justify-between">
                <ul>
                    <li><CommonHead commonHeading={"All skins types"}/></li>
                    <li className='flex gap-20'>
                        <CommonRates countIcon={<BsFillBoxSeamFill/>} countNumber={<CountUp end={48}/>} countText={"Products"}/>
                        <CommonRates countIcon={<RiShoppingBagFill/>} countNumber={<CountUp end={200}/>} plusSign={"+"} countText={"Product solds"}/>
                        <CommonRates countIcon={<HiMiniFaceSmile/>} countNumber={<CountUp end={99}/>} plusSign={"+"} countText={"Review"}/>
                    </li>
                    <li className='font-ptSerif font-normal text-[36px] text-brandColor leading-[130%] mt-10'>Men's Hand wash  lorem</li>
                    <li className='flex items-center gap-5 mt-[114px]'><CommonButton /> <span className='font-ptSerif font-normal text-[31px] text-brandColor leading-[145%]'>৳ 700</span></li>
                </ul>
                <ul>
                    <img src="images/hand_wash_image.png" alt="hand_wash_image" />
                </ul>
            </div>
        </section>
        </>
    )
}

export default Handwash