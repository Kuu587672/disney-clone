import React from 'react'
import genresList from './../constants/GenresList.jsx'
import MovieList from './MovieList.jsx'

function GenreMovieList() {
  return (
    <div>
        {genresList.genre.map((item, index) => index <= 4 && (
            <div key={item.id} className='p-8 px-5 md:px-16' >
                <h2 className='text-[20px] text-white font-bold' >
                    {item.name}
                </h2>

                {/* Movie List Component */}
                <MovieList genreId={item.id} />
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList