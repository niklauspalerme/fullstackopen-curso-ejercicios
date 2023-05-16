import React from 'react'

export const Persona = ({persona, handleDelete}) =>{

    return (
        <>
             <h3>
                {persona.name} - {persona.number}
                <button onClick={handleDelete} id={persona.id} name={persona.name}>Eliminar</button>
             </h3>
        </>
    )
}