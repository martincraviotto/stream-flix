import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pelicula = () => {
	const { id } = useParams();

	const [movie, setMovie] = useState();
	const [trailer, setTrailer] = useState(null);

	const API_KEY = ''; //Agregar API_KEY

	useEffect(() => {
		const fetchMovie = () => {
			fetch(
				`https://api.themoviedb.org/3/movie/${id}?language=es-AR&api_key=${API_KEY}`
			)
				.then((response) => response.json())
				.then((data) => setMovie(data))
				.catch((err) => {
					console.log(err.message);
				});
		};
		const fetchTrailer = () => {
			fetch(
				`https://api.themoviedb.org/3/movie/${id}
            /videos?language=es-AR&api_key=${API_KEY}`
			)
				.then((response) => response.json())
				.then((data) => setTrailer(data.results[0].key))
				.catch((err) => {
					console.log(err.message);
				});
		};
		fetchMovie();
		fetchTrailer();
	}, []);

	return (
		<>
			{movie ? (
				<>
					<section className=''>
						<h2 className=''>
							{movie.title}
							<span className=''>({movie.original_title})</span>
						</h2>
						<img
							src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
							alt={movie.title}
							style={{ width: '100%', height: '300px', objectFit: 'cover' }}
						/>
						<div className=''>
							<a
								href={`https://www.youtube.com/embed/${trailer}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								Trailer
							</a>
						</div>
						<p className=''>{movie?.overview}</p>
					</section>
				</>
			) : null}
		</>
	);
};

export default Pelicula;
