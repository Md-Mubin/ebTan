import React from 'react'
import CommonHead from '../../Commons/CommonHead'
import CommonButton from '../../Commons/CommonButton'
import CommonToggle from '../../Commons/CommonToggle'

const Cream = () => {
    return (
        <>
            <section className='w-full lg:py-[144px]'>
                <div className="container flex flex-col lg:flex-row mt-10 lg:mt-0 gap-16 lg:gap-10 xl:gap-[120px] items-center">

                    <img src="images/cream_image.png" alt="cream_image" />

                    <ul>
                        <li><CommonHead commonHeading={"All skins types"} /> </li>

                        <li className='font-ptSerif font-normal text-4xl lg:text-[38px] xl:text-[48px] text-center lg:text-start text-commonColor leading-[64px]'>Men's day cream</li>

                        <li className='sm:mt-[44px] flex flex-col gap-[18px]'>

                            <CommonToggle info={"How to use"} infoHead={"How to use"} />
                            <CommonToggle info={"Ingredients"} infoHead={"Ingredients"} />
                            <CommonToggle info={"Benefits"} infoHead={"Benefits"} />
                        </li>

                        <li className='mt-[37px] flex items-center gap-4 xl:gap-[27px]'><CommonButton /> <span className='font-ptSerif font-normal text-2xl xl:text-[31px] text-brandColor leading-[145%]'>৳ 500</span></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Cream