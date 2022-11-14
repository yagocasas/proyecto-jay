import React, { useState } from 'react'

const EditCharacters = () => {


    const [edit, setEdit] = useState()

const Funcion = (X) => {
    let contador = 0;
    if(X==='X'){
            contador = contador + 1
        } else{
            contador = contador - 1
        }
    
    return(
        contador
    )
}
    



    return (
        <>
        <button onClick={() => Funcion('X')}>+</button>
        <button onClick={() => Funcion('Y')}>-</button>
        </>
        
    )
}

export default EditCharacters