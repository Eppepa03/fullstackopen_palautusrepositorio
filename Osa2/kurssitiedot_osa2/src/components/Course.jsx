const Header = (props) => {
    return(
    <>
      <h2>{props.course.name}</h2>
    </>
    )
  }

const Part = ({part}) => {
    console.log("part", part)
  
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    )
  }

const Content = ({ parts }) => {
    console.log("content", parts)
    return (
      <>
        {parts.map(part =>
          <Part key={parts.id} part={part} />
        )}
      </>
    )
  }

const Total = ({ course }) => {
    var values = course.parts.map(part =>
      part.exercises
    )
  
    return (
      <b>
       total of {values.reduce((a, b) => a + b, 0)} exercises
      </b>
    )
  }

const Course = ({ course }) => {
    console.log("course", course)
  
    return(
      <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total course={course} />
      </>
    )
  }

export default Course