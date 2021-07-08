import { React, Fragment } from 'react'


const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({parts, exercises}) => {

  return (
    <>
      <Part part={parts[0]} exercises={exercises[0]}/>
      <Part part={parts[1]} exercises={exercises[1]}/>
      <Part part={parts[2]} exercises={exercises[2]}/>
    </>
  )
}

const Part = ({part, exercises}) => {
  return (
    <>
      <p>{part} {exercises}</p>
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
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14
  const exercises = [exercises1, exercises2, exercises3]


  return (
    <div>
      <Header name={course}/>
      <Content
        parts={[part1, part2, part3]}
        exercises={exercises}
      />
      <Total exercises={exercises}/>
    </div>
  );
}

export default App;
