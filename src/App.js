import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StreamFlixAPI } from './componentes/StreamFlixAPI';
import Home from './componentes/Home';

function App() {
	return (
		<>
			<h1> StreamFlix </h1>
			<h2> Peliculas y Series</h2>
			<StreamFlixAPI />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
