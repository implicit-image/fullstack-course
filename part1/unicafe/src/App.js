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
  const all = fields
        .map(f => f.value)
        .reduce((a, b) => a + b)
  const average = fields //(positive - negative) / sum
        .map(f => f.text == "bad" ? -1 * f.value : f.text == "good" ? 1 * f.value : 0)
        .reduce((a, b) => a + b) / all
  const positive = fields
        .filter(f => f.text === "good")
        .map(f => f.value)
        .reduce((a, b) => a + b) * 100 / all

  if (all == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  else {
    return (
      <table>
        {fields.map( f => {
          return (<Statistic text={f.text} value={f.value}/>)
        })}

        <Statistic text={"all"} value={all}/>
        <Statistic text={"average"} value={isNaN(average) ? 0 : average}/>
        <Statistic text={"positive"} value={isNaN(positive) || !isFinite(positive) ? 0 : positive}/>
      </table>
    )
  }
}


const Statistic = ({ text, value }) => {
  return (
    <tr>
        <td>{text}</td>
        <td>{value}{text=="positive" ? "%" : ""}</td>
    </tr>
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
