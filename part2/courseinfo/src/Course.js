import React from 'react'





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

const Course = ({course}) => {
  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}



export default Course
