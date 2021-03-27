import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
const Header =(props)=>{
  return(
    <h1>{props.course}</h1>
  )
}
const Content=(props)=>{
  return (
    <>
      {props.parts.map((part) => {
        return(
          <Part part={part.name} exercise={part.exercises}/>
        )
      })}
    </>
  )
}
const Part = (props)=>{
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
const Total = (props)=>{
  return(
    <p>Number of exercises {props.parts.reduce((sum, part) => ( sum + part.exercises), 0)}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))