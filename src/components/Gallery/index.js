import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './styles.css'
import Hero from '../Hero'
import heroes from '../../heroes.js'
import * as heroService from '../../services/heroServices.js'

const Gallery = () => {
  const { userName } = useContext(AuthContext);
  const [starWarsHeroes, setStarWarsHeroes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    heroService.getAll()
      .then(result => {
        setStarWarsHeroes(result)
      })
  }, [])

  const heroesImages = starWarsHeroes.map(h => h.image)
  
  return (
    <article className='gallery-container'>
      <header className="gallery-header">
        <p className="user-name">{userName}</p>
      </header>

      <input type="text" className='gallery-search ' onChange={(e) => setSearch(e.target.value)} />

      <section className='cards-container'>
        {heroes.filter((value) => {
          if (search === "") {
            return value
          } else if (value.name.toLowerCase().includes(search.toLocaleLowerCase())) {
            return value
          } else if (value.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return value
          }
        }).map((hero) => (
          <Hero key={hero.id} hero={hero} heroesImages={heroesImages}/>
        ))}
      </section>
    </article>
  )
}

export default Gallery