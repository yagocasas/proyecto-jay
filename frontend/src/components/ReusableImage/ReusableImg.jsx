import React from 'react'

const ReusableImg = ({enlace, logo, clase}) => {
    return (
        <div>
            <img src={enlace} alt={logo} className={clase}/>
        </div>
    )
}

export default ReusableImg