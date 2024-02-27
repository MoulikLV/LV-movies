import React from 'react'
import { useSearch } from '../../Context/Searchcontext'
import "./Searchresults.css"

function Searchresults() {
    const {results,flag,loading}=useSearch()
    const baseURL="https://image.tmdb.org/t/p/original"
  return (
    <div className='search_results'>
       {loading && <h4>Loading..</h4>}
       {flag && results.map((movie)=>{
        return(  <div key={movie.id} className='movie_card'>
        <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} className='movie-poster'/>
    </div>)
      
       })} 
    </div>
  )
}

export default Searchresults
