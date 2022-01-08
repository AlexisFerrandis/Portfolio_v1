import React, { useState } from "react";
import Draggable from "react-draggable";

import Header from "../windows/Header";
import Profil from "../windows/Profil";

const Navbar = () => {
	const [profilWindow, setprofilWindow] = useState(false);

	const draggableWindow = () => {
		console.log("tataru");
	};

	return (
		<>
			<div className="navbar">
				<button onClick={() => setprofilWindow(true)} id="sideBarProfilBtn">
					<img src="./assets/icons/profil-ico.svg" alt="Profil button, open Alexis's profil on click." />
				</button>
				<button id="sideBarPortfolioBtn">
					<img src="./assets/icons/folder-ico.svg" alt="Project button, open Alexis's portfolio on click." />
				</button>
				<button id="sideBarContactBtn">
					<img src="./assets/icons/contact-ico.svg" alt="Contact button, open Alexis's contact on click." />
				</button>
				<button id="sideBarThemesBtn">
					<img src="./assets/icons/themes-ico.svg" alt="Themes button, open themes's selection on click." />
				</button>
				<button id="sideBarArcadeBtn">
					<img src="./assets/icons/arcade-ico.svg" alt="Launch the game !" />
				</button>
				<button id="sideBarSettingsBtn">
					<img src="./assets/icons/settings-ico.svg" alt="Settings, personalize desktop" />
				</button>
			</div>
			{profilWindow && (
				<Draggable>
					<section className="window" onMouseDown={draggableWindow}>
						<Header title="Profil" redBtnRef={setprofilWindow} />
						<Profil />
					</section>
				</Draggable>
			)}
		</>
	);
};

export default Navbar;
