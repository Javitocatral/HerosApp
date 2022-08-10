import { heroes } from "../data/heroes";

export const getHerosByPublisher = (publisher) =>{
    const validPublisher = ['DC Comics', 'Marvel Comics']
    if( !validPublisher.includes(publisher)){
        throw new Error( `${publisher} no existe`)
    }
    return heroes.filter( heroe => heroe.publisher === publisher)
}