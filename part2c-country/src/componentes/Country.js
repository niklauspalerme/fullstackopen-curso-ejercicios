import React from 'react'


export const Country = ({pais}) =>{
  return(
    <div key={pais.name.common}>
      <h1>{pais.name.common}</h1>
      <p>Capital: 
        { 
          (pais.capital) 
          ? pais.capital[0] 
          : ''
        }
      </p>
      <p>Population: {pais.population}</p>
      <h2>Languages</h2>
      <ul>
      {
        Object.keys(pais.languages)
        .map( atributo => <li key={atributo}>{pais.languages[atributo]}</li> )
      }
      </ul>
      <img src={pais.flags.png} alt="Descripción de la imagen" />
    </div>
  )
}