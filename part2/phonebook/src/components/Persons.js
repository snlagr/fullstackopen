import React from 'react'

const Persons = ({persons, searchFilter, deletePerson}) => {
    return (
      persons
        .filter(e => e.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map(person => {
          return (
            <div key={person.name}>
              {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
            </div>
          )
        })
    )
  }

export default Persons