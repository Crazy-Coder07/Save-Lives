import React from 'react'
import HeadHome from './HeadHome'

const LayoutHome = ({children}) => {
    return (
        <>
         <div className="header">
                <HeadHome />
         </div>
         <div>
            {children}
         </div>
        </>
    )
}

export default LayoutHome