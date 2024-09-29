import React from 'react'
import CommonHead from '../../Commons/CommonHead'
import CommonButton from '../../Commons/CommonButton'

const Cream = () => {
    return (
        <>
            <section className='py-[144px]'>
                <div className="container flex gap-[120px] items-center">

                    <img src="images/cream_image.png" alt="cream_image" />

                    <ul className='flex flex-col gap-[32px]'>
                        <li><CommonHead commonHeading={"All skins types"} /> </li>
                        <li className='w-[970px] font-ptSerif font-normal text-[48px] text-commonColor leading-[64px]'>Men's day cream</li>
                        <li></li>
                        <li className='flex items-center gap-[27px]'><CommonButton /> <span className='font-ptSerif font-normal text-[31px] text-brandColor leading-[145%]'>৳ 500</span></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Cream