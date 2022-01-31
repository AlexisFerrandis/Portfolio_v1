import React from "react";

const Profil = (props) => {
	return (
		<div className="content">
			<img className="profil-pic" src="../assets/img/profil-pic.png" alt="profil pic" />
			<h1>Alexis Ferrandis</h1>
			<h2>Développement Web</h2>
			<p className="localisation">
				<img className="localisation" src="../assets/icons/map-marker.svg" alt="localisation" />
				Paris, France
			</p>
			<div className="info">
				<h3>À propos</h3>
				<p>
					Bienvenue sur mon portfolio,
					<br />
					<br />
					En tant que développeur web indépendant, je fais preuve de créativité pour développer des applications authentiques et originales.
					<br />
					<br />
					Pour des missions en freelance, vous pouvez m'envoyer un <a href="mailto:alexisferrandis@protonmail.com">email,</a> ou visiter la page de contact.
					<br />
					Je réponds dans les 24h.
				</p>
			</div>
			<div className="info">
				<h3>Skills</h3>
				<div className="skills">
					<img src="../assets/icons/html.svg" alt="html" />
					<img src="../assets/icons/css.svg" alt="css" />
					<img src="../assets/icons/sass.svg" alt="sass" />
					<img src="../assets/icons/javascript.svg" alt="javascript" />
					<div className="database">
						<img src="../assets/icons/database.svg" alt="database" />
					</div>
					<img src="../assets/icons/react.svg" alt="react" />
				</div>
			</div>
			<button className="btn" type="button" onClick={() => props.contactBtn(true)}>
				Contact
			</button>
		</div>
	);
};

export default Profil;
