import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loader from './Loader';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='relative w-[110px] md:w-[200px]'>
      { !imgLoaded && ( <Loader/> ) }
      <div onClick={() => navigate(`/play/${movie.id}`)}>
        <img 
          src={IMAGE_BASE_URL + movie.poster_path} 
          className='w-[110px] md:w-[200px] block h-auto rounded-md hover:border-3 border-gray-600 hover:scale-110 transition-all duration-200 ease-in cursor-pointer shadow-md shadow-black'
          loading='lazy'
          onLoad={() => setImgLoaded(true)}
        />
        <h2 className='
            text-white
            mt-2
            w-[110px] md:w-[200px]
            truncate overflow-hidden whitespace-nowrap
          '>
            {movie.title}
        </h2>
      </div>
    </div>
  )
}

export default MovieCard