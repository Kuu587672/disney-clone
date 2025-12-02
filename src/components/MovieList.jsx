import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({genreId}) {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    // Slide by one visible page
    const slideLeft = (el) => {
        if (!el) return;
        const distance = Math.max(el.clientWidth - 48, 200);
        el.scrollBy({ left: -distance, behaviour: 'smooth' });
    }

    const slideRight = (el) => {
        if (!el) return;
        const distance = Math.max(el.clientWidth - 48, 200);
        el.scrollBy({ left: distance, behaviour: 'smooth' });
    }
    
    useEffect(() => {
        if (!genreId) {
            setMovieList([]);
            return;
        }

        const getMovieByGenreId = async () => {
            try {
                const resp = await GlobalApi.getMovieByGenreId(genreId);
                setMovieList(resp.data.results);
            } catch (err) {
                console.log("Error while fetching movies by genre id: ", err);
            }
        }

        getMovieByGenreId();
    }, [genreId]) // Fetch movies when genreId changes
        
    return (
        <div className='relative'>
            {/* Left scroll arrow */}
            <IoChevronBackOutline 
            aria-label='Scroll left'
            onClick={() => slideLeft(elementRef.current)} 
            className='hidden md:flex items-center justify-center text-[50px] text-white p-2 z-10 cursor-pointer absolute left-2 top-1/2 -translate-y-1/2'
            />

            {/* Main content */}
            <div ref={elementRef} className='flex overflow-x-auto gap-4 md:gap-8 py-2 -ml-4 px-4 md:py-5 no-scrollbar scroll-smooth'>
                {movieList.map((item, index) => (
                    <div key={item.id} className='shrink-0'>
                        <MovieCard movie={item} />
                    </div>
                ))}
            </div>

            {/* Right scroll arrow */}
            <IoChevronForwardOutline  
            aria-label='Scroll left'
            onClick={() => slideRight(elementRef.current)} 
            className='text-[50px] text-white p-2 z-10 cursor-pointer hidden md:flex absolute right-2 top-1/2 -translate-y-1/2'
            />
        </div>
  )
}

export default MovieList