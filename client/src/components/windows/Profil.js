import React from "react";

const Profil = () => {
	return (
		<div className="content">
			<img className="profil-pic" src="./assets/img/profil-pic.jpg" alt="Profil pic" />
			<h1>Alexis Ferrandis</h1>
			<h2>web development</h2>
			<p>
				<img className="map-ico" src="./assets/icons/map-marker.svg" alt="Localisation" />
				Paris, France
			</p>
			<h3>About</h3>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, quas laborum! Velit, ad ipsum veniam aliquam laboriosam fugiat doloremque tempore, placeat atque consequuntur unde voluptatibus magnam repellat modi qui facilis amet, ab eius quidem molestiae aspernatur. Reprehenderit iste nostrum fugit laborum tempora?</p>
			<div className="social">
				<img src="./assets/icons/github.svg" alt="Github" />
				<img src="./assets/icons/linkedin.svg" alt="Linkedin" />
				<img src="./assets/icons/twitter.svg" alt="Twitter" />
			</div>
		</div>
	);
};

export default Profil;
