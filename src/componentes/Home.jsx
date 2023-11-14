import React from 'react';
import endpoints from '../endpoints';
import Slider from './Slider';

const Home = () => {
	return (
		<>
			<Slider url={endpoints.popularMovies} title={'Películas más vistas'} />
			<Slider url={endpoints.popularSeries} title={'Series más vistas'} />
		</>
	);
};

export default Home;
