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





  return(
    <div className='App'>
      <Search/>
      <CardList people={people}/>
    </div>
  )
}

export default App;
