import React from 'react'
import Person from './Person'


const Persons = ({persons, search, deleter}) => {
  return (
    <div>
      {persons.filter(person => person
                      .name.toLowerCase()
                      .startsWith(search.toLowerCase()))
              .map(({name, number}) =>
                <p key={number}>
                  <Person name={name} number={number} deleter={() => deleter(number)}/>
                </p>)}
    </div>
  )
}

export default Persons
