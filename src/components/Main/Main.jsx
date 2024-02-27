import React, { useState } from 'react'
import Row from '../Row'

import requests from '../Api/Requests'
import { useSearch } from '../../Context/Searchcontext'
import Banner from '../Banner'



function Main() {
   const {flag}=useSearch()
  
  return (

    flag ? (<div></div>) : (
    <div>
      
      <Banner/>
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Romantic" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentary" fetchURL={requests.fetchDocumentaries} />
      
    </div>
    )
  )
}

export default Main
