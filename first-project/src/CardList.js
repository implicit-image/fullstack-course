import Card from './Card'
import './CardList.css'




const CardList = ({ people, query }) =>
      <div className='cardlist'>
        { people
          .filter((person) => person.name.includes(query))
          .map((person, i) => {
            return(
              <Card name={person.name} photo={person.img_link} key={i}/>
            )
          })}
      </div>


export default CardList
