import axios from '../Api/Axios'
import React from 'react'
import { useState,useContext } from 'react'
import requests from '../Api/Requests'
import "./Search.css"
import {useNavigate} from "react-router-dom"


import { useSearch } from '../../Context/Searchcontext'



function Search() {

  const navigate=useNavigate()
   
  const {search,flag,query,setQuery,setFlag,setResults}=useSearch()

    const handleChange=(e)=>{
        e.preventDefault()
        setQuery(e.target.value)

    }

    const handleSubmit=()=>{
        if(query){
           search()
           const encodedquery=encodeURIComponent(query)
           
           navigate(`/search/${encodeURIComponent(query)}`)
        }
       
    }

    const cancelSearch=()=>{
        setQuery("")
        setFlag(false)
        setResults([])
        navigate('/')
    }
  return (
    <div className='search-form'>
      <input type='text' placeholder='Search Movies' value={query} className='search-input' style={{ color: 'white' }} onChange={handleChange}/>
    
      {!flag && <button type='button' className='search-button' onClick={handleSubmit} style={{ color: 'white' }}>Search</button>}
      {flag && <button type='button' className='cancel-button' onClick={cancelSearch} style={{ color: 'white' }}>X</button>}
    </div>
  )
}

export default Search
