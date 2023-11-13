import React from 'react';
import endpoints from '../endpoints';
import useFetch from '../hooks/useFetch';

const Home = () => {
	// Ejemplo de como usar el hook useFetch
	// Falta agregar API_KEY para que funcione
	const { data, isLoading, error } = useFetch(endpoints.popularMovies);

	return (
		<>
			<h2 className='text-sm uppercase'>Películas</h2>
			{isLoading && <div>Cargando...</div>}
			{error && <div>{error.message}</div>}
			<div className='no-scrollbar flex min-h-[100px] w-full gap-2 overflow-y-hidden overflow-x-scroll '>
				{data && !error
					? data.map((movie) => {
							return (
								<div
									className='min-w-[75px] overflow-hidden rounded-sm bg-slate-800 text-xs text-white shadow-md'
									key={movie.id}
								>
									<div className='w-full'>
										<img
											src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											alt={movie.title}
											className='h-[100px] w-full'
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
