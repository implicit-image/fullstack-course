import { React, useState, useEffect } from 'react'
import './App.css';
import Searchbox from './components/Searchbox'
import Results from './components/Results'
import axios from 'axios'

const App = () => {

  const [search, setSearch] = useState("")
  const [response, setResponse] = useState([])
  const [results, setResults] = useState([])


  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        console.log(res.data)
        setResults(res.data)
        setResponse(res.data)
      })
  }, [])


  const handleSearchChange = (event) => {
    const s = event.target.value
    setSearch(s)
    setResults(response
               .filter(country =>
                 country.name.toLowerCase().includes(s.toLowerCase())
               ))
  }

  return (
    <div>
      <Searchbox searchHandler={handleSearchChange}/>
      <Results results={results} search={search}/>
    </div>
  )
}

export default App;
