import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  //States
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  //Controladores de Eventos
  const handledGoodClick = () =>{
    setGood(good +1 )
    setAll(all +1)
  }

  const handledBadClick = () =>{
    setBad(bad +1 )
    setAll(all +1)

   
  }

  const handledNeutralClick = () =>{
    setNeutral(neutral +1 )
    setAll(all +1)
  }

  return (
    <div>
      <h1>Give some feedback</h1>
      <button onClick={handledGoodClick}>Good +</button>
      <button onClick={handledNeutralClick}>Neutral =</button>
      <button onClick={handledBadClick}>Bad -</button>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all} </p>
      <p>Average: { isNaN( ((good - neutral - bad)/all) ) ? 0 : ( ( (good*1) + (bad*-1))/all )}</p>
      <p>Positive: {isNaN(good/all)? 0: good/all}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)