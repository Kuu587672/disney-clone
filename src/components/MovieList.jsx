import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import Loader from './Loader';
import MovieModal from './MovieModal';

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({genreId, idx}) {

    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const elementRef = useRef(null);

    // Slide by one visible page
    const slideLeft = (el) => {
        if (!el) return;
        const distance = Math.max(el.clientWidth - 48, 200);
        el.scrollBy({ left: -distance, behavior: 'smooth' });
    }

    const slideRight = (el) => {
        if (!el) return;
        const distance = Math.max(el.clientWidth - 48, 200);
        el.scrollBy({ left: distance, behavior: 'smooth' });
    }
    
    useEffect(() => {
        if (!genreId) return;

        const fetchMovies = async () => {
            try {
            setLoading(true);
            const resp = await GlobalApi.getMovieByGenreId(genreId);
            setMovieList(resp.data.results);
            } catch (err) {
            console.error(err);
            } finally {
            setLoading(false);
            }
        };

        fetchMovies();
    }, [genreId]); // Fetch movies when genreId changes

    // To check if selectedMovie changes
    // useEffect(() => {
    //   if (selectedMovie) {
    //     console.log(selectedMovie.title);
    //   }
    // }, [selectedMovie]);

        
    return (
        <div className='relative'>
            {/* Left scroll arrow */}
            <IoChevronBackOutline 
            aria-label='Scroll left'
            onClick={() => !loading && slideLeft(elementRef.current)} 
            className='hidden md:flex items-center justify-center text-[50px] text-white p-2 z-10 cursor-pointer absolute left-2 top-1/2 -translate-y-1/2'
            />

            {/* Main content */}
            {loading ? ( 
                <div className='w-full h-[200px] md:h-[320px] flex items-center justify-center'>
                    <Loader className="w-full md:h-[320px] h-[200px]" /> 
                </div>
            ) : ( 
                <div ref={elementRef} className='flex overflow-x-auto gap-4 md:gap-8 py-4 -ml-4 px-4 md:py-6 no-scrollbar scroll-smooth'>
                    {movieList.map((item, index) => (
                        <div
                         key={item.id}
                         className='shrink-0'
                         onClick={() => setSelectedMovie(item)}>
                            {(idx % 3 == 0) ? ( 
                                <HrMovieCard movie={item} /> 
                            ) : ( 
                                <MovieCard movie={item} /> 
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Right scroll arrow */}
            <IoChevronForwardOutline  
            aria-label='Scroll left'
            onClick={() => !loading && slideRight(elementRef.current)} 
            className='text-[50px] text-white p-2 z-10 cursor-pointer hidden md:flex absolute right-2 top-1/2 -translate-y-1/2'
            />

            { selectedMovie && (
                <MovieModal
                 movie={selectedMovie}
                 onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    )
}

export default MovieList