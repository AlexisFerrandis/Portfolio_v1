import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<p>NOT FOunD</p>
			<NavLink exact to="/">
				<span>Accueil</span>
			</NavLink>
		</div>
	);
};

export default NotFound;
