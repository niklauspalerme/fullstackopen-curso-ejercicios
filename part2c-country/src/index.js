import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import axios from "axios"
import { Country } from './componentes/Country';
import { CountryList } from './componentes/CountryList';


const App = () => {

  ///////////////////////////////////////////////
  //States

  const [countries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState('')
  const [ filter, setFilter ] = useState('')


  ////////////////////////////////////////////////
  // Controladores

 
  useEffect(() =>{

    axios.get("https://restcountries.com/v3.1/all")
    .then( response => {
      setCountries(response.data)
    })

  },[])


  const handleInputFilter = e => {
    setFilter(e.target.value)
    setShowCountry('')
  }

  const handleShowCountry = name => {
    setShowCountry(name)
  }

  ////////////////////////////////////////////////
  //Variables

  const filteredCountries = countries.filter(
    pais => pais.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const CountrySelected = countries.find(
    pais => pais.name.common === showCountry
  )


  ////////////////////////////////////////////////
  //Renderizado
  
  return (
    <div>
      <h1>Countries</h1>
      <div>
          Find Countries: <input value={filter} onChange={handleInputFilter}/>
      </div>
      <div>
        {
          (filter === '')
          ? ""
          : (filteredCountries.length > 10)
            ? <p>Too many matches, specify another filter</p>
            : (filteredCountries.length === 1)
              ? <Country pais={filteredCountries[0]}/>
              : filteredCountries.map( pais => 
                  <CountryList  key={pais.name.common} country={pais} handleShowCountry={handleShowCountry}/>
                )
        }
      </div>
      <br/>
      {
        (showCountry!== '')
        ? <Country  pais={CountrySelected}/>
        : ''
      }
    </div>
  )
}


///////////////////////
//Renderizado

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
