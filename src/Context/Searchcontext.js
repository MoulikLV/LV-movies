import React, { useContext } from 'react'
import { createContext } from 'react'

import { useState } from 'react'
import axios from '../components/Api/Axios'
import requests from '../components/Api/Requests'

export const Searchcontext=createContext()

export const useSearch=()=>{
    return useContext(Searchcontext)
}

export const SearchProvider =({children})=>{
    const [query,setQuery]=useState('')
    const [results,setResults]=useState([])
    const [flag,setFlag]=useState(false)
    const [loading,setLoading]=useState(true)
    const search=()=>{
        axios.get(`${requests.search}&query=${query}`).then(response=>{
            setResults(response.data.results)
            
            setFlag(true)
            setLoading(!loading)
            console.log(response.data.results)
        })
    }
    return(
      <Searchcontext.Provider value={{query,results,flag,loading,search,setFlag,setQuery,setResults,setLoading}}>
       {children}
      </Searchcontext.Provider>
    )
}
