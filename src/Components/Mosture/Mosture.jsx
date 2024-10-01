// ===================== All Imports
import React        from 'react'
import CommonHead   from '../../Commons/CommonHead'
import CommonButton from '../../Commons/CommonButton'
import CommonToggle from '../../Commons/CommonToggle'

const Mosture = () => {
    return (
        <>
            {/* ================== Mosture Section ================== */}
            <section className='w-full pb-[142px] '>
                <div className="container flex flex-col-reverse lg:flex-row mt-20 lg:mt-0 gap-20 lg:gap-0 xl:gap-[190px] items-center">

                    {/* -------- Mosture Informations -------- */}
                    <ul>
                        <CommonHead commonHeading={"Only Skins Types"} />

                        <h1 className='lg:w-[479px] font-ptSerif font-normal text-3xl lg:text-4xl xl:text-5xl text-center lg:text-start text-commonColor leading-[120%] mt-[30px]'>Men's lip balm lasting (25 gr)</h1>

                        {/* descrimination */}
                        <li className='mt-[44px] flex flex-col gap-[18px]'>
                            <CommonToggle info={"How to use"}  infoHead={"How to use"} />
                            <CommonToggle info={"Ingredients"} infoHead={"Ingredients"} />
                            <CommonToggle info={"Benefits"}    infoHead={"Benefits"} />
                        </li>

                        {/* price & add to cart part */}
                        <li className='mt-[37px] flex items-center gap-4 lg:gap-[27px]'>
                            <CommonButton />
                            <span className='font-ptSerif font-normal text-2xl lg:text-[31px] text-brandColor leading-[145%]'>৳ 300</span>
                        </li>
                    </ul>

                    {/* -------- Mosture Image -------- */}
                    <ul className='pl-10 lg:pl-0'>
                        <img src="images/mostur_image.png" alt="mosture_image" />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Mosture