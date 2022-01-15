import React from "react";

const Profil = (props) => {
	return (
		<div className="content">
			<img className="profil-pic" src="./assets/img/profil-pic.jpg" alt="Profil pic" />
			<h1>Alexis Ferrandis</h1>
			<h2>Web Development</h2>
			<p className="localisation">
				<img className="localisation" src="./assets/icons/map-marker.svg" alt="Localisation" />
				Paris, France
			</p>
			<div className="info">
				<h3>About</h3>
				<p>
					Hi, my name is Alexis Ferrandis, I'm a french developer based in Paris. I really enjoy web development and as a french guy, wine !
					<br />
					<br />
					For freelance enquiries, you can send me an <a href="mailto:alexisferrandis@protonmail.com">email</a>, or else visit the contact window.
				</p>
			</div>
			<div className="info">
				<h3>Skills</h3>
				<div className="skills">
					<img src="./assets/icons/html.svg" alt="html" />
					<img src="./assets/icons/css.svg" alt="css" />
					<img src="./assets/icons/sass.svg" alt="sass" />
					<img src="./assets/icons/javascript.svg" alt="javascript" />
					<img src="./assets/icons/database.svg" alt="database" id="dataBase" />
					<div id="dataBaseInfo">SQL &#x26; MongoDb</div>
					<img src="./assets/icons/react.svg" alt="react" />
				</div>
			</div>
			<button className="btn btn-5" type="button" onClick={() => props.contactBtn(true)}>
				Contact
			</button>
		</div>
	);
};

export default Profil;
