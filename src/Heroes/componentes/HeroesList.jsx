
import { useMemo } from 'react';
import { getHerosByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroesList = ({publisher}) => {
    const heroes =useMemo(()=>getHerosByPublisher(publisher), [publisher] ) 
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {      
        heroes.map(hero => (
           <HeroCard key={hero.id}
           {...hero}/>
     ))
        }
    </div>
  )

}
