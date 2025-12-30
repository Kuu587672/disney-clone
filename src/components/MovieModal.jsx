import React, {useState, useEffect} from 'react'

import Loader from './Loader';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieModal({ movie, onClose }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    if (!movie) return null;

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        setImageLoaded(false);
    }, [movie]);

    return (
      <div className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center'>

        {/* Modal Box */}
        <div className='relative bg-[#131520] max-w-3xl w-full mx-10 rounded-lg overflow-hidden'>
            {/* Close Button */}
            <button
             onClick={onClose}
             className='absolute top-3 right-3 text-white text-2xl z-10'
            >
                X
            </button>

            {/* Backdrop Image */}
            <div className='relative w-full h-[200px] md:h-[300px] lg:h-[400px] bg-black'>
                { !imageLoaded && (
                    <Loader/>
                )}

                <img
                src={IMAGE_BASE_URL + movie.backdrop_path} 
                className='w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover'
                alt={movie.title || movie.name} 
                onLoad={() => setImageLoaded(true)}
                />
            </div>

            {/* Content */}
            <div className='p-5 md:p-8 text-white space-y-3'>
                <h2 className='text-2xl font-bold'>
                    {movie.title || movie.name}
                </h2>

                <p className='text-sm text-gray-300'>
                    Ratings: {movie.vote_average} | Release Date: {movie.release_date || "N/A"}
                </p>

                <p className='text-gray-200 text-sm leading-relaxed'>
                    {movie.overview}
                </p>
            </div>
        </div>
      </div>
    )
}

export default MovieModal