import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Hello = (props) => {
  
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old. </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = ()=>{

  const [counter, setCounter] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll]  = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  const increaseByOne  = ()=>{
    console.log('clicked increase')
    setCounter(counter+1)
  }

  const setToZero  = ()=>{
    console.log('clicked zero')
    setCounter(0)
  }

  const decreaseByOne = ()=>{
    setCounter(counter - 1)
  }


  const name = 'Peter'
  const age = 10

  return(
    
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter}/>
      <Button 
        onClick={increaseByOne}
        text='plus' 
      />
      <Button 
        onClick={setToZero} 
        text='zero'
      /> 
      <Button 
        onClick={decreaseByOne} 
        text='minus'
      />
      
      <Footer />

      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))