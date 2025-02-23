import React, { useState } from 'react'
import { StatisticLine } from './statistics';
import { Button } from './button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good / total) * 100 || 0;

  const isFeedbackGiven = total !== 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={setGood} label='good' value={good} />
      <Button clickHandler={setNeutral} label='neutral' value={neutral} />
      <Button clickHandler={setBad} label='bad' value={bad} />

      <h1>statistics</h1>
      {  isFeedbackGiven &&
        <table>
         <tbody>
          <StatisticLine label='good' stats={good} />
          <StatisticLine label='neutral' stats={neutral} />
          <StatisticLine label='bad' stats={bad} />
          <StatisticLine label='average' stats={average} />
          <StatisticLine label='positive' stats={positive} />
         </tbody>
        </table>
      }
      { !isFeedbackGiven &&
        <p>No feedback given</p>
      }
    </div>
  )
}

export default App