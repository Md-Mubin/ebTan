import React from 'react'
import CommonHead from '../../Commons/CommonHead'
import CommonButton from '../../Commons/CommonButton'
import CommonToggle from '../../Commons/CommonToggle'

const Mosture = () => {
    return (
        <>
            <section className='w-full pb-[142px]'>
                <div className="container flex gap-[190px] items-center">
                    <ul>
                        <CommonHead commonHeading={"Only Skins Types"} />

                        <h1 className='w-[479px] font-ptSerif font-normal text-[48px] text-commonColor leading-[120%] mt-[30px]'>Men's lip balm lasting (25 gr)</h1>

                        <li className='mt-[44px] flex flex-col gap-[18px]'>
                            <CommonToggle info={"How to use"} infoHead={"How to use"} />
                            <CommonToggle info={"Ingredients"} infoHead={"Ingredients"} />
                            <CommonToggle info={"Benefits"} infoHead={"Benefits"} />
                        </li>

                        <li className='mt-[37px] flex items-center gap-[27px]'>
                            <CommonButton />
                            <span className='font-ptSerif font-normal text-[31px] text-brandColor leading-[145%]'>৳ 300</span>
                        </li>
                    </ul>
                    <ul>
                        <img src="images/mostur_image.png" alt="mosture_image" />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Mosture