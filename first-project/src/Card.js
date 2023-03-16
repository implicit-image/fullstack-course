import './Card.css'



const Card = ({ name }) => {

  return (
    <div className='card'>
      <img src='' alt='personal card' />
      <div className='info'>
        <p>
          {name}
        </p>
      </div>
    </div>
  )


}

export default Card
