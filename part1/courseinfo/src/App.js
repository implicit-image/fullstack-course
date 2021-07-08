import { React, Fragment } from 'react'


const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({parts}) => {

  return (
    <>
    {parts.map(p => {
      return (
        <Part name={p.name} exercises={p.exercises}/>
      )
    })}
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

const Total = ({parts}) => {
  return (
    <>
      <p>Number of exercises {parts.map(p => p.exercises ).reduce((a, b) => a + b )}</p>
    </>
  )
}


const App = () => {
  const course = "Half Stack application developement"
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }]


  const exercises = parts.map(p => p.exercises)


  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
