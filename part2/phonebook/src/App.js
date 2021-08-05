import { React, useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import './App.css'
import entryService from './services/entries'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newSearch, setNewSearch] = useState("")


  useEffect(() => {
    entryService
      .getAll()
      .then(re => {
        setPersons(re.data)
        console.log(re.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

//run every time letter is added or removed from text field
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    if (newName === "" || newNumber === "")
      return 0
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if ((!persons.some(person => person.number === newPerson.number ))) {
      //setPersons(persons.concat(newPerson))
      entryService
        .create(newPerson)
        .then(r => {
          entryService
            .getAll()
            .then(res => {
              setPersons(res.data)
            })
        })
      setNewName("")
      setNewNumber("")
    }
    else {
      alert(`${newNumber} is already in the phonebook`)
    }
  }

  const deletePerson = (number) => {
    const people = persons
    const target = people.filter(person => person.number === number)[0]
    if (window.confirm(`Delete ${target.name}?`)) {
    entryService
      .remove(target.id)
      .then(r => setPersons(persons.filter(p => p.id !== target.id)))
      .catch(r => {
        console.log(r)
      })
    }
    else {
      return 0
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onSearchChange={handleSearchChange}/>
      <h2>Add a new number</h2>
      <PersonForm
        nameValue={newName}
        nameHandler={handleNameChange}
        numberValue={newNumber}
        numberHandler={handleNumberChange}
        addPerson={addNewPerson}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        search={newSearch}
        deleter={deletePerson}
      />
    </div>
  );
}

export default App;
