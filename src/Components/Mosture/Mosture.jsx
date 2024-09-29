import React from 'react'
import CommonHead from '../../Commons/CommonHead'
import CommonButton from '../../Commons/CommonButton'

const Mosture = () => {
    return (
        <>
            <section>
                <div className="container">
                    <ul>
                        <CommonHead commonHeading={"OInly Skins Types"} />

                        <h1>Men's lip balm lasting (25 gr)</h1>

                        <li></li>

                        <li>
                            <CommonButton />
                            <span className='font-ptSerif font-normal text-[31px] text-brandColor leading-[145%]'>৳ 300</span>
                        </li>
                        
                    </ul>

                    <img src="images/" alt="" />
                </div>
            </section>
        </>
    )
}

export default Mosture