import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StreamFlixAPI } from './componentes/StreamFlixAPI';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Login from './componentes/Login';
import SignUp from './componentes/SignUp';
import Usuarios from './componentes/Usuarios';
import Perfil from './componentes/Perfil';
import Peliculas from './componentes/Peliculas';
import Pelicula from './componentes/Pelicula';
import Series from './componentes/Series';
import Serie from './componentes/Serie';
import MiLista from './componentes/MiLista';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';

function App() {
	return (
		<>
			{/* <h1> StreamFlix </h1>
			<h2> Peliculas y Series</h2> */}
			{/* <StreamFlixAPI /> */}
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/usuarios' element={<Usuarios />} />
				<Route path='/perfil' element={<Perfil />} />
				<Route path='/peliculas' element={<Peliculas />} />
				<Route path='/series' element={<Series />} />
				<Route path='/pelicula/:id' element={<Pelicula />} />
				<Route path='/series/:id' element={<Serie />} />
				<Route path='/lista' element={<MiLista />} />
				<Route path='/contacto' element={<Contacto />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
