import React from 'react'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber}) => {
    return (
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

export default PersonForm