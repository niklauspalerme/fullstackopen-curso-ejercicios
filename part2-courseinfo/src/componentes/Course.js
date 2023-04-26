import React from 'react'
import { Header } from './Header'
import { Content } from './Content'


const Total = ({ parts }) => {
    const total = parts.reduce(( acc, part ) => acc + part.exercises, 0);
  
    return (
      <p>
        <strong>Total of exercises: {total}</strong>
      </p>
    );
};



export const Course = ({courses}) => {

    return (
        <>
            <h1>Web Develoment Curriculum</h1>
            {
                courses.map( course => (
                    <>
                        <Header  key={course.id}name={course.name} />
                        <Content key={course.id} parts={course.parts}/>
                        <Total key={course.id} parts={course.parts} />
                    </>
                ) )
            }
        </>
    );


}
