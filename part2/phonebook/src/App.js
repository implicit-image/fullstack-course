import { React, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import './App.css'






const App = () => {

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "111111111" }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newSearch, setNewSearch] = useState("")

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

    const newPerson = {
      name: newName,
      number: newNumber
    }

    if ((!persons.some(person => person.number === newPerson.number ))) {
      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewNumber("")
    }
    else {
      alert(`${newNumber} is already in the phonebook`)
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
      />
    </div>
  );
}

export default App;
