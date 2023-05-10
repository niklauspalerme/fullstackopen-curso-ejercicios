import React from 'react'

export const CountryList = ({ country, handleShowCountry }) => {
  return (
    <div>
      <p>{country.name.common}</p>
      <button onClick={() => handleShowCountry(country.name.common)}>Show</button>
    </div>
  )
}