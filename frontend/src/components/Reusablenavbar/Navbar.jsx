import React from 'react'
import Anchor from '../Linkreusable/Link'



const ReusableNavbar = ({clase}) => {
  return (
    <nav className={clase}>
      <ul className='navbar--list'>
        <li><Anchor nav='/' texto='Home' type='navbar--link'/></li>
        <li><Anchor nav='/characters' texto='Personajes' type='navbar--link'/></li>
        <li><Anchor nav='/login' texto='Iniciar Sesión' type='navbar--link'/></li>
        <li><Anchor nav='/register' texto='Regístrate' type='navbar--link'/></li>
      {/* <input></input> */}
      {/* preguntar a santi */}
      {/* <Anchor texto='Detalles' type='navbar--link'/> */}
      </ul>
    </nav>
  )
}

export default ReusableNavbar