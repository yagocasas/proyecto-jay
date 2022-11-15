import React from 'react'
import Footer from './ReusableFooter/Footer'
import ReusableImg from './ReusableImage/ReusableImg'
import ReusableNavbar from './Reusablenavbar/Navbar'
import './styles/Home.scss'

const Home = () => {
    return (
        <>
        <div className='div--home'>
                <ReusableImg enlace={'/assets/imagenes/khtitle.png'} logo={'logo'}/>
                <ReusableNavbar clase='navbar--home'/>
        </div>
        <Footer clase='footer--home' show='none'/>
        </>
    )
}

export default Home