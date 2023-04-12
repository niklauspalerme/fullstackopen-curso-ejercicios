import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const StatisticLine = ({text,value}) =>  <p>{text} {value}</p>

const Statistics = ({good,neutral,bad,all}) => {
  return(
    <>
      <h1>Statistics</h1>
        <StatisticLine text='Good:' value={good} />
        <StatisticLine text='Neutral:' value={neutral} />
        <StatisticLine text='Bad:' value={bad} />
        <StatisticLine text='All:' value={all} />
        <StatisticLine text='Average:' value={isNaN( ((good - neutral - bad)/all) ) ? 0 : ( ( (good*1) + (bad*-1))/all )} />
        <StatisticLine text='Positive % :' value={isNaN(good/all)? 0: good/all} />
    </>
  )
}

const Button = ({handleControllerEvent, text}) => <button onClick={handleControllerEvent}> {text}</button>

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
      <Button handleControllerEvent={handledGoodClick} text="Good +" />
      <Button handleControllerEvent={handledNeutralClick} text="Neutral =" />
      <Button handleControllerEvent={handledBadClick} text="Bad -" />
      {
        (all === 0)
        ?<p>No feedback given</p>
        :<Statistics good={good} bad={bad} neutral={neutral} all={all}/>
      }
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)