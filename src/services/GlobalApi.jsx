import axios from 'axios';

const api_key = import.meta.env.VITE_TMDB_API_KEY;
const movieBaseURL = "https://api.themoviedb.org/3";
const movieByGenreBaseURL = `${movieBaseURL}/discover/movie?api_key=${api_key}&with_genres=`;

const getTrendingMovies = () => {
    return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}`);
}

const getMovieByGenreId = (id) => {
    return axios.get(`${movieByGenreBaseURL}${id}`);
}

const getMovieDetails = (id) => {
    return axios.get(`${movieBaseURL}/movie/${id}?api_key=${api_key}`);
}

const getMovieVideos = (id) => {
    return axios.get(`${movieBaseURL}/movie/${id}/videos?api_key=${api_key}`);
}

export default {
    getTrendingMovies,
    getMovieByGenreId,
    getMovieDetails,
    getMovieVideos,
}