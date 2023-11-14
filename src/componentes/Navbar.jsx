import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '10px',
			}}
		>
			<h1>StreamFlix</h1>
			<ul
				className=''
				style={{
					fontSize: '12px',
					listStyleType: 'none',
					display: 'flex',
					gap: '10px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<li className=''>
					<Link to='/' style={{ textDecoration: 'none' }}>
						Home
					</Link>
				</li>
				<li className=''>
					<Link to='/series' style={{ textDecoration: 'none' }}>
						Series
					</Link>
				</li>
				<li className=''>
					<Link to='/peliculas' style={{ textDecoration: 'none' }}>
						Películas
					</Link>
				</li>
				<li className=''>
					<Link to='/contacto' style={{ textDecoration: 'none' }}>
						Contacto
					</Link>
				</li>
				<li className=''>
					<Link to='/lista' style={{ textDecoration: 'none' }}>
						Mi Lista
					</Link>
				</li>
				<li className=''>
					<Link to='/login' style={{ textDecoration: 'none' }}>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
