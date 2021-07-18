import React from 'react'


const PersonForm = ({
  nameValue, nameHandler, numberValue,
  numberHandler, addPerson }) => {
  return (
    <form>
      <div>
        name
        <input
          value={nameValue} // so we can reset field content
          onChange={nameHandler}
        />
      </div>
      <div>
        number
        <input
          value={numberValue}
          onChange={numberHandler}
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={addPerson}
        >
          add
        </button>
      </div>
    </form>
  )
}

export default PersonForm
