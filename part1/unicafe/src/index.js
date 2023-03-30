import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Stats = ({good, neutral, bad})=>{
  return(
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood=()=>{
    setGood(good+1)
  }

  const handleNeu = ()=>{
    setNeutral(neutral+1)
  }

  const handleBad = ()=>{
    setBad(bad+1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeu} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <Stats 
        good={good} 
        neutral={neutral}
        bad={bad}
      /> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
