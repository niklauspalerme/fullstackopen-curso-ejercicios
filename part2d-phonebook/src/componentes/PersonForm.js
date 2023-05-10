import React from 'react'

export const PersonForm = ({handleForm,newName,handleInput,newNumber,handleInputNumber}) => <>

    <form onSubmit={handleForm}>
        <div>
          Name: <input value={newName} onChange={handleInput}/>
        </div>
       <br/>
        <div>
          Number: <input value={newNumber} onChange={handleInputNumber}/>
        </div>
        <br/>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
</>