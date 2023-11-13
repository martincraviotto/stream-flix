import React from 'react';
import endpoints from '../endpoints';
import useFetch from '../hooks/useFetch';

const Home = () => {
	// Ejemplo de como usar el hook useFetch
	// Falta agregar API_KEY para que funcione
	const { data, isLoading, error } = useFetch(endpoints.popularMovies);

	return (
		<>
			<h2 className=''>Películas</h2>
			{isLoading && <div>Cargando...</div>}
			{error && <div>{error.message}</div>}
			<div className=''>
				{data && !error
					? data.map((movie) => {
							return (
								<div className='' key={movie.id}>
									<div className=''>
										<img
											src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											alt={movie.title}
											className=''
										/>
									</div>
								</div>
							);
					  })
					: null}
			</div>
		</>
	);
};

export default Home;
