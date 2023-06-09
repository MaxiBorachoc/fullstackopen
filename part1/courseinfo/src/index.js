import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }




  const Header=()=>{
    
    return(
      <>
        <h1>{course.name}</h1>
      </>
    )
  }

  const Part=(props)=>{
    console.log(props)
    return(
      <p>
          {props.part.name} {props.part.exercises}
      </p>
    )
  }

  const Content = (props)=>{
    
    return(
      <>
        <Part part={course.parts[0]}  />
        <Part part={course.parts[1]} />
        <Part part={course.parts[2]} />
      </>
    )
  }

  const Total = ()=>{

    

    return(
      <>
        <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      </>
    )
  }

  return (
    <div>
  
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))