import { useState, useStates } from "react"

const App= () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

const [selected, setSelected] = useState(0)

const [vote,setVote] =useState(new Array(anecdotes.length).fill(0))

let highestVote = 0

let copyOfVote = [...vote]

console.log('vote in app', vote)
console.log('copy of vote in app', copyOfVote)


  
  const handleClick = () => {
    let nextAnecdote= Math.floor(Math.random()*8)
    console.log('Generated no:', Math.random())
    console.log(nextAnecdote)
    setSelected(nextAnecdote)
  }

  const handleVote = () => {
 
  copyOfVote[selected] +=1
  setVote(copyOfVote)

  console.log('copy of Vote array in handlevote', copyOfVote)
}

const MaxVote = () => {
  highestVote = Math.max(...vote)
  console.log('highest vote', highestVote)
}
  
console.log('selected:', selected)

   return (
    <div>
      <h2>
      {anecdotes[selected]}
      </h2>
      <p> This anecdote has {copyOfVote[selected]} votes </p>

      <p>
        <button onClick={handleClick}>Next anecdote</button>
        <button onClick={handleVote}> Vote </button>
      </p>

     <h3>
      <p>
      The anecdote with highest votes is: {MaxVote()}
     
      </p>
      </h3>
      <p>
      {anecdotes[vote.indexOf(highestVote)]}
      </p>
      <p>
        This anecdote has {highestVote} votes</p>             
    </div>
  )
}

export default App
