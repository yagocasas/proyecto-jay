import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/auth.actions";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (formdata) => {
    //Necesitamos un async??
    dispatch(loginUser(formdata, navigate));
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <label>
        e-mail
        <input
          type="email"
          name="email"
          {...register("email", {
            required: "Introduce un email, por favor",
            minLength: {
              value: 5,
              message: "Introduce un email más largo",
            },
            pattern: {
              message: "Introduce un email con formato válido",
            },
          })}
        />
      </label>
      {errors.email ? <>
        {errors.email.type === "required" && <p>{errors.email.message}</p>}
        {errors.email.type === "minLength" && <p>{errors.email.message}</p>}
        {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
      </> : null};
      <label>
        Password
        <input type="password" name="password" {...register('password', {
            required: "Introduce tu contraseña",
           
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
  );
};

export default Login;
