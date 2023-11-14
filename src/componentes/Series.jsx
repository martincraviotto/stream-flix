import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints';

const Series = () => {
	const { data, isLoading, error } = useFetch(endpoints.popularSeries);

	return (
		<section className='' style={{ textAlign: 'center' }}>
			<h2 className=''>Series</h2>
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
					? data.map((serie) => {
							return (
								<div className='' key={serie.id} style={{ cursor: 'pointer' }}>
									<Link to={`/series/${serie.id}`}>
										<img
											src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
											alt={serie.title}
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

export default Series;
