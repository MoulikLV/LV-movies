
import React, { useEffect, useState } from 'react'
import requests from '../Api/Requests'
import axios from "../Api/Axios"
import "./Row.css"

import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'





function Row({ title, fetchURL,isLargeRow}) {
    const baseurl= "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([])
    const [trailerUrl,setTrailerUrl]=useState("")
    useEffect(() => {
            axios.get(fetchURL).then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    }, [])

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie.title || movie.name || "")
            .then(url =>{console.log(url)
                const urlParams =new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
                
            }).catch(error => console.log(error));
        }
    }

    const opts={
        height : "390",
        width :"99%",
        playerVars:{
            autoplay:0,
        },
    }

    return (
        <div className='row'>
           <center>
           <h2 style={{color:"red"}}>
              {title}
            </h2>
           </center>
            <div className={`rowPosters`}>
                {movies.map((movie)=>{
                    return (<img className='rowPoster' key={movie.id} onClick={()=>handleClick(movie)}   src={`${baseurl}${movie.poster_path}`}/>)
                })}
            </div>
            <div>
               {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
           
        </div>
    )
}

export default Row
