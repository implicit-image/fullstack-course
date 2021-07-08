import { React, Fragment } from 'react'


const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ({course}) => {

  return (
    <>
      {course.parts.map(p => {
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

const Total = ({course}) => {
  return (
    <>
      <p>Number of exercises {course.parts.map(p => p.exercises ).reduce((a, b) => a + b )}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: "Half Stack application developement",
    parts: [
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
  }



  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
