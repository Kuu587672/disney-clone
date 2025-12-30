import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import GlobalApi from '../services/GlobalApi'

import Loader from '../components/Loader';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function PlayMovie() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(true);
    const [videoLoading, setVideoLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);

                const details = await GlobalApi.getMovieDetails(id);
                setMovie(details.data);

                const videos = await GlobalApi.getMovieVideos(id);
                const trailer = videos.data.results.find(
                    v => v.type === "Trailer" && v.site === "YouTube"
                );

                setTrailerKey(trailer?.key);
            } catch (err) {
                console.error("Error: ", err);
            } finally {
                setLoading(false);  
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) return <Loader className='w-full h-full flex items-center justify-center'/>;

  return (
    <div className='w-full min-h-screen bg-[#131520] text-white'>

        {/* Back Button */}
        <button
            onClick={() => navigate(-1)}
            className='m-5 md:ml-10 lg:ml-20 px-4 py-2 bg-gray-700 rounded'
        >
            &lt; Back
        </button>

        <div className='mx-5 md:mx-10 lg:mx-20'>

            {/* Trailer */}
            { videoLoading && (
                <Loader className='absolute inset-0 z-10 bg-black' />
            )}
            { trailerKey && (
                <iframe
                className='w-full h-[250px] md:h-[500px]'
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1&mute=1`} 
                allow="autoplay; fullscreen" 
                onLoad={() => setVideoLoading(false)}
                />
            )}

            {/* Details */}
            <div className='py-6 md:p-6 max-w-4xl'>
                <h2 className='text-2xl md:text-4xl font-bold'>
                    { movie.title || movie.name }
                </h2>

                <p className='mt-4 text-gray-300'>
                    <span className='font-semibold text-white'>Ratings:</span> {movie.vote_average} | <span className='font-semibold text-white'>Release Date:</span> {movie.release_date || "N/A"}
                </p>

                <p className='mt-4 text-gray-300'>
                    <span className='font-semibold text-white'>Genre:</span> { movie.genres?.map(g => g.name).join(", ") || "N/A" }
                </p>

                <p className='mt-4 text-gray-300'>
                    <span className='font-semibold text-white'>Overview:</span> { movie.overview }
                </p>
            </div>

        </div>
    </div>
  )
}

export default PlayMovie