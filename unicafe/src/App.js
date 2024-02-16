import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Statistics = (props) => {
  console.log(props)
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) {
    return (
      <table className="table">
        <tbody>
          <tr>
            <StatisticLine text="good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="average" value={props.average / props.all} />
          </tr>
          <tr>
            <StatisticLine
              text="positive"
              value={(props.good / props.all) * 100}
            />
          </tr>
        </tbody>
      </table>
    )
  } else {
    return <div>No feedback given</div>
  }
}

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </>
    )
  }
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleLeftClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }

  const handleCenterClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(average + 0)
  }

  const handleRightClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleLeftClick} text="good" />
      <Button handleClick={handleCenterClick} text="neutral" />
      <Button handleClick={handleRightClick} text="bad" />
      <Header text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
      />
    </div>
  )
}

export default App
