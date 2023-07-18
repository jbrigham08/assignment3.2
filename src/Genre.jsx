import React from 'react'
import Movie from './Movie'

const Genre = ({name, description, movieTitle1, movieTitle2}) => {
  return (
    <>
    
    <h3>Genre Title: {name}</h3>

    <p>Description: {description}</p>

    <Movie title={movieTitle1.title} year={movieTitle1.year} />

    <Movie title={movieTitle2.title} year={movieTitle2.year} />
    
    </>
   
  )
}

export default Genre