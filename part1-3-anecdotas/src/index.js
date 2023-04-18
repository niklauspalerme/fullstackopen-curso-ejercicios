import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {

  //State
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({0:0,1:0,2:0,3:0,4:0,5:0})
  const [highPoints, setHighPoints] = useState(0)


  //Controlador de Evento
  const randomAnecdote = () => {

    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    const newHighPoints = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);
    setHighPoints(newHighPoints);
    setSelected(randomIndex);

  };

  //Metodo Xs
//   const objetoConMayorValor = () =>{

//     const arrayTest = {...points}

//    return Object.values(arrayTest).reduce((objetoAnterior, objetoActual) => {
//     return objetoAnterior.valor > objetoActual.valor ? objetoAnterior : objetoActual;
//   });

// }

  const handleVote = () =>{

    const newPoints = {
      ...points,
      [selected]: (points[selected]+1)
    }
    setPoints(newPoints)
  }

  //Return
  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <button onClick={randomAnecdote}>Mostrar otra anécdota</button>
      <p>Votes: {points[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <h1>{anecdotes[highPoints]}</h1>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
