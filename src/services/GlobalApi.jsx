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

export default {
    getTrendingMovies,
    getMovieByGenreId,
}