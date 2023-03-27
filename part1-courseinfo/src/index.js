import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) =>{
  return (
    <>
      <p>{props.part} {props.excersice}</p>
    </>
  )
}

const Content = (props) =>{
  return (
    <>
      <Part part={props.parts[0].name} excersice={props.parts[0].exercises} />
      <Part part={props.parts[1].name} excersice={props.parts[1].exercises} />
      <Part part={props.parts[2].name} excersice={props.parts[0].exercises} />
    </>
  )
}

const Header = ({course})=> <h1>{course.name}</h1>

const Total = ({parts}) => {

  return (
    <>
      <p>Number of excercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )

}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course}/>
      <Content parts = {course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))