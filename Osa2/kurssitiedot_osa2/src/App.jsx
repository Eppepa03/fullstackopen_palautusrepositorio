const Header = (props) => {
  return(
  <>
    <h1>{props.course.name}</h1>
  </>
  )
}

const Part = ({parts}) => {
  console.log(parts)

  return (
    <>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </>
  )
}

const Content = ({ course }) => {
  console.log(course)
  return (
    <>
      <Part parts={course.parts[0]}/>
      <Part parts={course.parts[1]}/>
      <Part parts={course.parts[2]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}

const Course = ({ course }) => {
  console.log(course)

  return(
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React", 
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data", 
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component", 
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
