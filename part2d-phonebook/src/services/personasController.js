import axios from "axios"

export const getPersonas = () =>{

    return axios.get("http://localhost:3001/db")
    .then( response => {
     return response.data.persons
    })
}

export const createPersona = (persona)=>{

    axios.post("http://localhost:3001/persons", persona)
    .then( response => {
     console.log(response)
    })
}

export const deletePersona = (id) =>{
    
    axios.delete(`http://localhost:3001/persons/${id}`)
      .then(resp=> {
        console.log(resp)
      })

}

export const updatePersona = (persona) =>{

    console.log(persona)

    axios.put(`http://localhost:3001/persons/${persona.id}`, persona)
    .then(resp=> {
      console.log(resp)
    })
}