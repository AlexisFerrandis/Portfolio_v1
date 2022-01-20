import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="netfloux-header">
			<nav>
				<ul>
					<NavLink to="/netfloux">
						<li>
							<img src="../assets/img/projects/netfloux/netfloux-logo.png" alt="netfloux" />
						</li>
					</NavLink>
					<NavLink to="/netfloux">
						<li>Accueil</li>
					</NavLink>
					<NavLink to="/netfloux/list" className={(nav) => (nav.isActive ? "nav-active" : "")}>
						<li>Ma liste</li>
					</NavLink>
					<NavLink to="/netfloux/films" className={(nav) => (nav.isActive ? "nav-active" : "")}>
						<li>Films</li>
					</NavLink>
					<NavLink to="/netfloux/series" className={(nav) => (nav.isActive ? "nav-active" : "")}>
						<li>Séries</li>
					</NavLink>
				</ul>
			</nav>
			<div className="profil">
				<img className="picture" src="../assets/img/projects/netfloux/profil.jpg" alt="profil pic" />
				<img className="open" src="../assets/icons/down.svg" alt="open profil" />
			</div>
		</div>
	);
};

export default Header;
