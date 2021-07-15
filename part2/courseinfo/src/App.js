import React from 'react';
//import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts
                    .map(p => p.exercises)
                    .reduce((e, f) => { return e + f})
  return(
    <p>Number of exercises {sum}</p>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(p => {
        return (
          <div key={p.id}>
            <Part part={p}/>
          </div>
        )
      })}
    </>
  )
}

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map(c => {
        return (
          <div key={c.id}>
            <Course course={c}/>
          </div>
        )

      })}
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10,
        },
        {
          id: 2,
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          id: 3,
          name: 'State of a component',
          exercises: 14
        }
      ]

    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          id: 1,
          name: "Routing",
          exercises: 3,
        },
        {
          id: 2,
          name: "Middlewares",
          exercises: 7,
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses}/>
    </div>
  )
}

export default App;
