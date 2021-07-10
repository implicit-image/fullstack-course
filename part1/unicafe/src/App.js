import { React, useState } from 'react'


const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const SelectionPanel = ({ fields }) => {
  return (
    <>
      {fields.map( f => {
        return (<Button handleClick={f.handler} text={f.text}/>)
      })}
    </>
  )
}

const StatisticsPanel = ({ fields }) => {
  return (
    <>
      {fields.map( f => {
        return (<Statistic field={f}/>)
      })}
    </>
  )
}


const Statistic = ({ field }) => {
  return (
    <>
      <p>{field.text}: {field.value}</p>
    </>
  )
}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const fields = [
    {
      text: "good",
      value: good,
      handler: () => setGood(good+1)
    },
    {
      text: "neutral",
      value: neutral,
      handler: () => setNeutral(neutral+1)
    },
    {
      text: "bad",
      value: bad,
      handler: () => setBad(bad+1)
    }
  ]



  return (
    <div>
      <h1>give feedback</h1>
      <SelectionPanel fields={fields} />
      <h1>statistics</h1>
      <StatisticsPanel fields={fields}/>
    </div>
  );
}

export default App;
