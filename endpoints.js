const API_KEY = ''; // Agregar API KEY
const BASE_URL = 'https://api.themoviedb.org/3/';

const endpoints = {
	// Movies
	popularMovies: `${BASE_URL}movie/popular?language=es-AR&api_key=${API_KEY}`,
	nowPlayingMovies: `${BASE_URL}movie/now_playing?language=es-AR&api_key=${API_KEY}`,
	upcomingMovies: `${BASE_URL}movie/upcoming?language=es-AR&api_key=${API_KEY}`,

	// Series
	popularSeries: `${BASE_URL}tv/popular?language=es-AR&api_key=${API_KEY}`,
	topRatedSeries: `${BASE_URL}tv/top_rated?language=es-AR&api_key=${API_KEY}`,
	airingTodaySeries: `${BASE_URL}tv/airing_today?language=es-AR&api_key=${API_KEY}`,
};

export default endpoints;
