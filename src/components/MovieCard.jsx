import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {

  if (!movie) return null;

  return (
    <div>
        <img 
          src={IMAGE_BASE_URL + movie.poster_path} 
          className='w-[110px] md:w-[200px] block h-auto rounded-md hover:border-3 border-gray-600 hover:scale-110 transition-all duration-200 ease-in cursor-pointer shadow-md shadow-black'
          loading='lazy'
        />
    </div>
  )
}

export default MovieCard