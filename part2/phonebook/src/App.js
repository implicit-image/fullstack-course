import { React, useState } from 'react'
import './App.css'




const Numbers = ({ persons }) => {
  return (
    <div>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </div>
  )
}


const App = () => {

  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ])

  const [newName, setNewName] = useState("")

//run every time letter is added or removed from text field
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName
    }


    if ((!persons.some(person => person.name === newPerson.name ))) {
      setPersons(persons.concat(newPerson))
      setNewName("")
    }
    else {
      alert(`${newName} is already in the phonebook`)
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
