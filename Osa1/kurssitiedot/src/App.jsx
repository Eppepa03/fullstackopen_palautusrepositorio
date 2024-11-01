const Header = (props) => {
  return(
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.content.part} {props.content.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.content[0]}/>
      <Part content={props.content[1]}/>
      <Part content={props.content[2]}/>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const content = [
    {part: "Fundamentals of React", exercises: 10},
    {part: "Using props to pass data", exercises: 7},
    {part: "State of a component", exercises: 14}
  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content content={content} />
      <p>Number of exercises {content[0].exercises + content[1].exercises + content[2].exercises}</p>
    </div>
  )
}

export default App
