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

const Total = ({exercises}) => {
  return (
    <>
      <p>Number of exercises {exercises.reduce((a, b) => {return a + b})}</p>
    </>
  )
}


const App = () => {
  const course = "Half Stack application developement"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }


  const parts = [part1, part2, part3]
  const exercises = parts.map(p => p.exercises)


  return (
    <div>
      <Header name={course}/>
      <Content
        parts={parts}
      />
      <Total exercises={exercises}/>
    </div>
  );
}

export default App;
