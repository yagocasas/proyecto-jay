import React from 'react'
import Footer from './ReusableFooter/Footer'
import ReusableNavbar from './Reusablenavbar/Navbar'
import './styles/Home.scss'

const Home = () => {
    return (
        <div className='div--home'>
            <img src="/assets/imagenes/khtitle.png" alt="headtitle" />
                <ReusableNavbar clase='navbar--home'/>
                <Footer clase='footer--home' show='none'/>
        </div>
    )
}

export default Home