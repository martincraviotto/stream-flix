import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints';

const Peliculas = () => {
	const { data, isLoading, error } = useFetch(endpoints.popularMovies);

	return (
		<section className='' style={{ textAlign: 'center' }}>
			<h2 className=''>Películas</h2>
			{isLoading && <div>Cargando...</div>}
			{error && <div>{error.message}</div>}
			<div
				className=''
				style={{
					display: 'flex',
					gap: '10px',
					flexWrap: 'wrap',
					marginInline: 'auto',
					justifyContent: 'center',
				}}
			>
				{data && !error
					? data.map((movie) => {
							return (
								<div className='' key={movie.id} style={{ cursor: 'pointer' }}>
									<Link to={`/pelicula/${movie.id}`}>
										<img
											src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											alt={movie.title}
											className=''
											style={{ width: '150px', height: '200px' }}
										/>
									</Link>
								</div>
							);
					  })
					: null}
			</div>
		</section>
	);
};

export default Peliculas;
