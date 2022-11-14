import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthAdmin = ({component}) => {
    const {user, token} = useSelector((state) => state.auth)
    if(user === null) return(<Navigate to="/login"/>);
    if(user.rol === 'admin') return component
    }
    
    export default AuthAdmin