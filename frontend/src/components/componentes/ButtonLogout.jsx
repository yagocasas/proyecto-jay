import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/auth/auth.actions';
import ReusableButton from '../Reusablebutton/Button';

const ButtonLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logoutUser(navigate))
    }

    return (
        <ReusableButton funcion={logOut} clase='botonlogout' texto='LogOut'/>
    )
}

export default ButtonLogout