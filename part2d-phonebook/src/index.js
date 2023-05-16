import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import { Filter } from './componentes/Filter';
import { PersonForm } from './componentes/PersonForm';
import { Personas } from './componentes/Personas';
import { createPersona, deletePersona, getPersonas, updatePersona } from './services/personasController';


const App = () => {


  ///////////////////////////////////////////////
  //States


  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [show, setShow] = useState(false)


  ////////////////////////////////////////////////
  // Hooks Efectos

  useEffect( () =>{

    console.log("Use Effect #1")
    setShow(false)

    getPersonas()
    .then(resp=> {
      setPersons(resp)
      setShow(true)
    })

  },[])


  ////////////////////////////////////////////////
  // Controladores

  const handleInput = (event) =>{
    setNewName(event.target.value);
  }

  const handleInputNumber = (e) => setNewNumber(e.target.value)

  const handleInputFilter = e => setFilter(e.target.value)

  const handleForm = (event) => {
    event.preventDefault();

    if( persons.find(person => person.name === newName)){

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personaUpdate = persons.find(persona => persona.name === newName)
        personaUpdate.number = newNumber;
        updatePersona(personaUpdate);
        setNewName("");
        setNewNumber("");
      }
    
        setNewName("");
        setNewNumber("");
    }else{
      const newContact = {
        name: newName,
        number: newNumber,
        id: (persons.reduce( (per1,per2) => per1.id > per2.id ? per1.id: per2.id))+1
      };

      setPersons(persons.concat(newContact));
      setNewName('')
      setNewNumber('')
      createPersona(newContact);

    }    
  }

  const handleDelete = (event) =>{

    event.preventDefault();
    const id = parseInt(event.target.id);
    const name = event.target.name
  
    if (window.confirm(`Do you wan to delete ${name}`)){
      const personas = [...persons];
      const personasFiltradas = personas.filter( pers => pers.id !== id);
      console.log("Filtrado:", personasFiltradas)
      setPersons(personasFiltradas);
      deletePersona(id);
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleInputFilter={handleInputFilter}/>
      <br/>
      <h3>Add a new:</h3>
      <PersonForm handleForm={handleForm} newName={newName} 
        handleInput={handleInput} newNumber={newNumber} 
        handleInputNumber={handleInputNumber}
      />
      <h2>Numbers:</h2>
     {
       (show)
       ? <Personas persons={persons} filter={filter} handleDelete={handleDelete}/> 
       : <h1>Cargando...</h1>
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
