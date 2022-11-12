import React from 'react'
import './Button.scss'




const ReusableButton = ({texto, clase, funcion}) => {
    return (
        <button className={clase} onClick={funcion}>
            {texto}
        </button>
    )
}



export default ReusableButton