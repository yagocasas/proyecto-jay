import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { postNewCharacter } from '../../../../redux/Post/NewCharacterFunctions';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const NewCharacter = () => {

    const { register, handleSubmit, formState: {errors, isValid}} = useForm();
    let navigate = useNavigate(); //eliminar?
    const dispatch = useDispatch();

    const postCharacter = (formdata) => {
        const formData = new FormData();
        formData.append("nombre", formdata.name);
        formData.append("gender", formdata.gender);
        formData.append("role", formdata.role);
        formData.append("weapons", formdata.weapons);
        formData.append("img", formdata.img[0]);
        dispatch(postNewCharacter(formdata, navigate))
      };

  return (
          <form onSubmit= {handleSubmit(postCharacter)}>
        <label>
            Nombre
            <input
          type="text"
          name="nombre"
          {...register("name", {
            // required: "El personaje debe contener un nombre",
          })}
        />
          {errors.nombre ? <>
        {errors.nombre.type === "required" && <p>{errors.nombre.message}</p>}
      </> : null};
        </label>
        <label>
        Genero
        <input type="text" name="gender" {...register('gender', {
            // required: "Introduce un genero",
        }) } />
      </label>
      {errors.gender ? <p>Intruduce un género valido</p> : null}
      <label>
        Role
        <input type="text" name="role" {...register("role", {
            // required: "Introduce un role valido"
        })} />
      </label>
      {errors.role ? <p>Role invalido</p> : null}
      <label>
        Arma
        <input type="text" name="weapons" {...register("weapons", {
            // required: "Introduce un arma valida"
        })} />
      </label>
      {errors.weapons ? <p>Arma inválido</p> : null}
    <label>
        Imagen
        <input type="file" name="img" {...register("img", {
            // required: "Introduce una imagen"
        })} />
      </label>
      {errors.img ? <p>Imagen inválida</p> : null}

      <button type="submit" >Enviar</button>
    </form>
  )
}

export default NewCharacter