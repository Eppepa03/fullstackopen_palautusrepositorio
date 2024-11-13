import { useState } from "react"

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  console.log(props)
  const countAll = () => props.good + props.neutral + props.bad
  const countAverage = () => (props.good - props.bad) / countAll()
  const countPositive = () => props.good / countAll() * 100
  if (countAll() === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="average" value={countAverage()} />
        <StatisticLine text="positive" value={countPositive()} />
      </tbody>
    </table>
  )
}

const App = () => {
  // tallentaa napit omaan tilaansa
  const [good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)
  

  return(
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={increaseGoodByOne}
        text="good"
      />
      <Button
        handleClick={increaseNeutralByOne}
        text="neutral"
      />
      <Button
        handleClick={increaseBadByOne}
        text="bad"
      />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
