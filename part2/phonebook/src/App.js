import { React, useState } from 'react'
import './App.css'




const Numbers = ({ persons }) => {
  return (
    <div>
    {persons.map(person => <li key={person.number}>{person.name} {person.number}</li>)}
    </div>
  )
}


const App = () => {

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "111111111" }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

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
      <form>
        <div>
          name:
          <input
            value={newName} // so we can reset field content
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={addNewPerson}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons}/>
    </div>
      );
}

export default App;
