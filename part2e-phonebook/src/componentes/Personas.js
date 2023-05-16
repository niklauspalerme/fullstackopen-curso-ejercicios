import React from 'react'
import { Persona } from './Persona'


export const Personas = ({persons,filter, handleDelete}) => (

    <>
    {
        persons
        .filter((person) =>person.name.toLowerCase().includes(filter.toLowerCase()))
        .map( person => <Persona key={person.id} persona={person} handleDelete={handleDelete}/>)
      }
    </>
) 