import React from 'react'
import ReusableNavbar from './Reusablenavbar/Navbar'
import './styles/Home.scss'

const Home = () => {
    return (
        <div className='div--home'>
                <ReusableNavbar clase='navbar--home'/>
        </div>
    )
}

export default Home