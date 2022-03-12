import { useState } from 'react'
import './styles.css'
import ReactCardFlip from 'react-card-flip'

const Hero = ({ hero, heroesImages }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const hadnleClick = () => {
    setIsFlipped(true);
  }
  
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <article className='each-card-front' onClick={hadnleClick}>
        </article>
        <article className='each-card-back'>
          <img className='card-img' src={heroesImages[hero.id - 1]} alt={hero.name} />
          <h2 className='card-title'>{hero.name}</h2>
          <p className='card-desc'>{hero.description}</p>
        </article>
      </ReactCardFlip>
    </>
  )
}

export default Hero
