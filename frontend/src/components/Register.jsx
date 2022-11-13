import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newUser } from '../redux/auth/auth.actions';

const Register = () => {
    const { register, handleSubmit, formState: {errors, isValid}} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registerUser = (formdata) => {
        dispatch(newUser(formdata, navigate));
    };


  return (
    <form onSubmit= {handleSubmit(registerUser)}>
        <label>
            e-mail
            <input
          type="text"
          name="email"
          {...register("email", {
            required: "Introduce un email, por favor",
            minLength: {
              value: 5,
              message: "Introduce un email más largo",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,4}$/,
              message: "Introduce un email con formato válido",
            },
          })}
        />
          {errors.email ? <>
        {errors.email.type === "required" && <p>{errors.email.message}</p>}
        {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
        {/*cómo manejamos que ya exista un mail? */}
      </> : null};
        </label>
        <label>
        Password
        <input type="text" name="password" {...register('password', {
            required: "Introduce tu contraseña",
            pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,}
        }) } />
      </label>
      {errors.password ? <p>Password incorrecto</p> : null}

      <label>
        Username
        <input type="text" name="userName" {...register("userName", {
            required: "Introduce tu nombre de usuario",
            pattern: /^[a-zA-Z][a-zA-Z0-9.-]{1,20}$/,
        })} />
      </label>
      {errors.userName ? <p>Username inválido</p> : null}
      <button type="submit" disabled={!isValid}>Enviar</button>
    </form>
  )
}

export default Register