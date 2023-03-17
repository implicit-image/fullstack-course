import { React, useState } from 'react'
import CardList from './CardList'
import Search from './Search'



const App = () => {

  const [query, setQuery] = useState('')

  const people = [
    {
      name: 'adam',
      img_link: 'none'
    },
    {
      name: 'john',
      img_link: 'none'
    },
    {
      name: 'john',
      img_link: 'none'
    },
    {
      name: 'jonny',
      img_link: 'none'
    },
    {
      name: 'jolene',
      img_link: 'none'
    },
    {
      name: 'adam',
      img_link: 'none'
    },
    {
      name: 'adam',
      img_link: 'none'
    },
    {
      name: 'adam',
      img_link: 'none'
    },
    {
      name: 'adam',
      img_link: 'none'
    },
    {
      name: 'adam',
      img_link: 'none'
    },
  ]


  const updateQuery = (event) => setQuery(event.target.value)




  return(
    <div className='App'>
      <Search onchange={updateQuery}/>
      <CardList people={people} query={query}/>
    </div>
  )
}

export default App;
