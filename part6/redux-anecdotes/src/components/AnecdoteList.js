import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => {
    return state.anecdotes
      .sort((e1, e2) => e2.votes - e1.votes)
      .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteOnAnecdote(id))
    const noteContent = anecdotes.find(e => e.id === id).content
    dispatch(notificationChange(`you voted '${noteContent}'`))
    setTimeout(() => dispatch(notificationChange('')), 5000)
  }

  return (
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList