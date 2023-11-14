import React from 'react';
import useFetch from '../hooks/useFetch';

const Slider = ({ title, url }) => {
	// Ejemplo de como usar el hook useFetch
	// Falta agregar API_KEY para que funcione
	const { data, isLoading, error } = useFetch(url);

	return (
		<section className='' style={{ padding: '10px' }}>
			<h2 className='' style={{ fontSize: '1rem' }}>
				{title}
			</h2>
			{isLoading && <div>Cargando...</div>}
			{error && <div>{error.message}</div>}
			<div
				className=''
				style={{
					display: 'flex',
					minHeight: '100px',
					width: '100%',
					gap: '10px',
				}}
			>
				{data && !error
					? data.map((movie) => {
							return (
								<div
									className=''
									key={movie.id}
									style={{
										display: 'flex',
										minHeight: '100px',
										minWidth: '75px',
										gap: '10px',
									}}
								>
									<div className='' style={{ width: '100%' }}>
										<img
											src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
											alt={movie.title}
											className=''
											style={{
												height: '100px',
												width: '100%',
											}}
										/>
									</div>
								</div>
							);
					  })
					: null}
			</div>
		</section>
	);
};

export default Slider;
