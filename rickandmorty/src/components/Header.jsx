import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
	const [darkmode, setDarkmode] = useState(false);
	const color = useContext(ThemeContext);

	const handleClick = () => {
		setDarkmode(!darkmode);
	}
	return (
		<div className="Header">
			<h1 style={{ color }}>React Hooks</h1>
			<button 
			type="button" 
			onClick={() => handleClick()}
			>
				Change theme
			</button>
			<button 
			type="button" 
			onClick={() => setDarkmode(!darkmode)}
			>
				Change theme 2
			</button>
			<h3>{darkmode ? 'Dark mode Active' : 'Light mode'}</h3>
		</div>
	);
}

export default Header;
