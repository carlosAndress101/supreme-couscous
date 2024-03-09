//import React, { useEffect, useRef, useState } from 'react'
//import Card from '../contentDetails/Card'
//import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const ContentCategory = () => {

  const GenresList= [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  return (
    <div>
      {GenresList.map((item, i) => i < 4&&(
        <div className='p-8 px-8 md:px-16'>
        <h2 className='text-[20px] text-white 
        font-bold'>{item.name}</h2> 
        {/*<MovieList genreId={item.id} index_={index} />*/}   
    </div>
      ))}
    </div>
  )
}

export default ContentCategory
