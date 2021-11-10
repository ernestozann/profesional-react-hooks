import React, { useState } from 'react';

const Header = () => {
	const [darkmode, setDarkmode] = useState(false);

	const handleClick = () => {
		setDarkmode(!darkmode);
	}
	return (
		<div className="Header">
			<h1>React Hooks</h1>
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
			<h2>{darkmode ? 'Dark mode Active' : 'Light mode'}</h2>
		</div>
	);
}

export default Header;
