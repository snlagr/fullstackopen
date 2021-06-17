import React from 'react'

const Persons = ({persons, searchFilter}) => {
    return (
      persons.filter(e => e.name.toLowerCase().includes(searchFilter.toLowerCase())).map(person => <div key={person.name}>{person.name} {person.number}</div>)
    )
  }

export default Persons