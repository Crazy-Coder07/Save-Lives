import React from 'react'
import HeadHome from './HeadHome'
import FooterHome from './FooterHome'

const LayoutHome = ({ children }) => {
    return (
        <>
            <div className="header">
                <HeadHome />
            </div>
            <div>
                {children}
            </div>
            <div className='footer'>
                <FooterHome />
            </div>
        </>
    )
}

export default LayoutHome