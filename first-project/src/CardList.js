import Card from './Card'
import './CardList.css'




const CardList = ({ people }) =>
      <div className='cardlist'>
      { people.map((person) => {
        return(
          <Card name={person.name} photo={person.img_link}/>
        )
      })}
    </div>
export default CardList
