// ===================== All Imports
import React                  from 'react'
import CountUp                from 'react-countup'
import CommonLine             from '../../Commons/CommonLine'
import CommonButton           from '../../Commons/CommonButton'
import CommonRates            from '../../Commons/CommonRates'
import { FaSmileBeam }        from 'react-icons/fa'
import { RiStarFill }         from 'react-icons/ri'
import { BiSolidShoppingBag } from 'react-icons/bi'

const Home = () => {
  return (
    <>
       {/* ================== Banner Section ================== */}
      <section className='container mt-[98px] pb-[191px] flex justify-center items-center gap-[77px]'>

        {/* ---------- image part ---------- */}
        <ul>
          <img src="./images/banner.png" alt="banner_image" />
        </ul>

        {/* ---------- banner text part ---------- */}
        <ul className='flex flex-col'>

          {/* common heading */}
          <li><CommonLine commonHeading={"Normal to oily skin"} /></li>

          {/* main heading */}
          <h1 className='w-[540px] font-ptSerif font-normal text-[72px] text-commonColor leading-[110%] mt-5'>Men's Sunscreen hand & body</h1>

          {/* infos */}
          <p className='w-[526px] font-inter font-normal text-lg text-[#A0A79A] mt-5 leading-[145%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

          {/* button for adding item into cart */}
          <CommonButton />

          {/* ratings counts */}
          <li className='mt-[42px] flex gap-[49px]'>
            <CommonRates countIcon={<RiStarFill />}         countNumber={<CountUp end={4.6} decimal=',' decimals={1} />} countText={"Ratings"} /> 
            <CommonRates countIcon={<BiSolidShoppingBag />} countNumber={<CountUp end={200} />} plusSign={"+"}           countText={"Product solds"} />
            <CommonRates countIcon={<FaSmileBeam />}        countNumber={<CountUp end={99} />} plusSign={"+"}            countText={"Review"} />
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home