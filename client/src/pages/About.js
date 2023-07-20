import React from 'react'
import LayoutHome from '../components/shared/Layout/LayoutHome'
import img1 from "../images/bld1.webp"

const About = () => {
    return (
        <LayoutHome>
            <div className='d-flex gap-3 p-5'>
                <img src={img1} alt="not found" />
                <div>
                    <h2 className='text-center mb-3'>Welcome to Save Lives</h2>
                    <h5 className='text-center mb-3'>
                        A leading <b>blood bank</b> serving our community since 2023.
                        We take pride in our mission to save lives and improve the health of patients by providing safe and quality blood products.
                    </h5>
                    <h5 className='text-center mb-3'>
                        Our <b>mission</b> is to ensure a stable and reliable supply of blood products for patients in need,
                        while adhering to the highest standards of safety and quality.
                        Our vision is to create a healthier community by promoting voluntary blood donation and spreading awareness
                        about the importance of blood donation.
                    </h5>
                    <h5 className='text-center mb-3'>
                        <b>Join us</b> in our life-saving mission!
                        <p>
                            You can make a difference by becoming
                            a blood donor or volunteering with us. For more information on how you can get involved,
                            visit our contact us page. Together, we can save lives and build a healthier community.
                        </p>
                    </h5>
                </div>
            </div>
        </LayoutHome>
    )
}

export default About