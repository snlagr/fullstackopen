import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const [timeoutID, setTimeoutID] = useState(null)

  const anecdotes = useSelector(state => {
    return state.anecdotes
      .sort((e1, e2) => e2.votes - e1.votes)
      .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
  })
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteOnAnecdote(anecdote))
    const noteContent = anecdotes.find(e => e.id === anecdote.id).content
    clearInterval(timeoutID)
    console.log(timeoutID)
    setTimeoutID(dispatch(setNotification(`you voted '${noteContent}'`, 5)))
  }

  return (
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList