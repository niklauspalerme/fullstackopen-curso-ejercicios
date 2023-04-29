import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Filter } from './componentes/Filter';
import { PersonForm } from './componentes/PersonForm';
import { Person } from './componentes/Person';



const App = () => {

  ///////////////////////////////////////////////
  //States
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')




  ////////////////////////////////////////////////
  // Controladores

  const handleInput = (event) =>{
    setNewName(event.target.value);
  }

  const handleInputNumber = (e) => setNewNumber(e.target.value)

  const handleInputFilter = e => setFilter(e.target.value)

  const handleForm = (event) => {
    event.preventDefault();

    if( persons.find(person => person.name == newName)){
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      setNewNumber("")
    }else{
      const newContact = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(newContact));
      setNewName('')
      setNewNumber('')
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
      <Person persons={persons} filter={filter}/>
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
