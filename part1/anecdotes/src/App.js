import { React, useState } from 'react'



const Button = ({ handler, text }) => {
  return (
    <>
      <button onClick={handler}>{text}</button>
    </>
  )
}




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)


  const [votes, setVotes] = useState(anecdotes.map(a => {
    return {anecdote: a, votes: 0}
  }))

  const [best, setBest] = useState(votes[0])

  const voteOn = (selected) => {
    const results = [...votes]
    results[selected].votes+=1
    setVotes(results)
  }

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 100) % anecdotes.length)
    bestAnecdote()
  }


  const bestAnecdote = () => {
    const res = [...votes]
    setBest(res.sort((fst, snd) => {
      return fst.votes < snd.votes
    })[0])
  }


  return (
    <>
      <h1><b>Anecdote of the day</b></h1>
      <p>{votes[selected].anecdote}</p>
      <p>Has {votes[selected].votes} votes</p>
      <Button handler={() => nextAnecdote()}
      text="Next anecdote"
      />
      <Button handler={() => voteOn(selected)} text="Vote up"/>
      <h1><b>Anecdote with most votes</b></h1>
    <p>{best.anecdote}</p>
    <p>Has {best.votes} votes</p>
    </>
  )
}

export default App;
