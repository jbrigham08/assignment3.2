import React from 'react'
import Genre from './Genre'
import "./my.css"

const Container = () => {
  return (
    <>
    <h1>Movie App</h1>
    
    <Genre name={'comedy'} 
    description={'This makes you laugh'}
    movieTitle1 = { {'title' : 'Home Alone', 'year' :1990} }
    movieTitle2 = { {'title' : 'Friday', 'year' :1995} }
    
    />

    <Genre name={'romance'} 
    description={'This makes you fall in love'}
    movieTitle1 = { {'title' : 'The Notebook', 'year' :2004} }
    movieTitle2 = { {'title' : 'Marry Me', 'year' :2022} }
    
    />

    </>
  )
}

export default Container
