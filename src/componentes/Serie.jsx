import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Serie = () => {
	const { id } = useParams();
	const [serie, setSerie] = useState();

	const API_KEY = ''; //Agregar API_KEY

	useEffect(() => {
		const fetchSerie = () => {
			fetch(
				`https://api.themoviedb.org/3/tv/${id}?language=es-AR&api_key=${API_KEY}`
			)
				.then((response) => response.json())
				.then((data) => setSerie(data))
				.catch((err) => console.log(err.message));
		};

		fetchSerie();
	}, []);

	return (
		<>
			{serie ? (
				<>
					<section className=''>
						<h2 className=''>{serie.name}</h2>
						<img
							src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`}
							alt={serie.title}
							style={{ width: '100%', height: '300px', objectFit: 'cover' }}
						/>

						<p className=''>{serie?.overview}</p>
					</section>
				</>
			) : null}
		</>
	);
};

export default Serie;
