import React from "react";

// Img
import profilPic from "../../assets/img/profil-pic.png";

import locIco from "../../assets/icons/map-marker.svg";
import htmlIco from "../../assets/icons/html.svg";
import cssIco from "../../assets/icons/css.svg";
import sassIco from "../../assets/icons/sass.svg";
import jsIco from "../../assets/icons/javascript.svg";
import dbIco from "../../assets/icons/database.svg";
import reactIco from "../../assets/icons/react.svg";

const Profil = (props) => {
	return (
		<div className="content">
			<img className="profil-pic" src={profilPic} alt="profil pic" />
			<h1>Alexis Ferrandis</h1>
			<h2>Développement Web</h2>
			<p className="localisation">
				<img className="localisation" src={locIco} alt="localisation" />
				Paris, France
			</p>
			<div className="info">
				<h3>Bonjour</h3>
				<p>
					Bienvenue sur mon portfolio,
					<br />
					<br />
					Je suis développeur web indépendant orienté frontend.
					<br />
					J'aime faire preuve de créativité pour développer des applications authentiques et originales.
					<br />
					<br />
					Pour des missions en freelance, vous pouvez m'envoyer un <a href="mailto:alexisferrandis@protonmail.com">email,</a> ou visiter la page de contact.
					<br />
					Je réponds dans les 24h.
				</p>
			</div>
			<div className="info">
				<div className="skills">
					<img src={htmlIco} alt="html" />
					<img src={cssIco} alt="css" />
					<img src={sassIco} alt="sass" />
					<img src={jsIco} alt="javascript" />
					<div className="database">
						<img src={dbIco} alt="database" />
					</div>
					<img src={reactIco} alt="react" />
				</div>
			</div>
			<button className="btn" type="button" onClick={() => props.contactBtn(true)}>
				Contact
			</button>
		</div>
	);
};

export default Profil;
