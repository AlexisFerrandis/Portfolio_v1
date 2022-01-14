import React, { useState } from "react";
import Draggable from "react-draggable";

import Header from "../windows/Header";

import Profil from "../windows/Profil";
import Portfolio from "../windows/Portfolio";
import Contact from "../windows/Contact";
import Themes from "../windows/Themes";
import Arcade from "../windows/Arcade";
import Settings from "../windows/Settings";

const Navbar = () => {
	const [profilWindow, setProfilWindow] = useState(false);
	const [portfolioWindow, setPortfolioWindow] = useState(false);
	const [contactWindow, setContactWindow] = useState(false);
	const [themesWindow, setThemesWindow] = useState(false);
	const [arcadeWindow, setArcadeWindow] = useState(false);
	const [settingsWindow, setSettingsWindow] = useState(false);

	return (
		<>
			<div className="navbar">
				<button onClick={() => setProfilWindow(true)}>
					<img src="./assets/icons/profil.svg" alt="Alexis's profil" />
				</button>
				<button onClick={() => setPortfolioWindow(true)}>
					<img src="./assets/icons/folder.svg" alt="Alexis's portfolio" />
				</button>
				<button onClick={() => setContactWindow(true)}>
					<img src="./assets/icons/contact.svg" alt="Contact" />
				</button>
				<button onClick={() => setThemesWindow(true)}>
					<img src="./assets/icons/themes.svg" alt="Themes selection" />
				</button>
				<button onClick={() => setArcadeWindow(true)}>
					<img src="./assets/icons/arcade.svg" alt="Launch the game !" />
				</button>
				<button onClick={() => setSettingsWindow(true)}>
					<img src="./assets/icons/settings.svg" alt="Settings" />
				</button>
			</div>
			{profilWindow && (
				<Draggable defaultPosition={{ x: 42, y: 42 }}>
					<section className="window" id="profilWindow">
						<Header title="Profil" redBtnRef={setProfilWindow} />
						<Profil />
					</section>
				</Draggable>
			)}
			{portfolioWindow && (
				<Draggable>
					<section className="window">
						<Header title="Portfolio" redBtnRef={setPortfolioWindow} />
						<Portfolio />
					</section>
				</Draggable>
			)}
			{contactWindow && (
				<Draggable>
					<section className="window">
						<Header title="Contact" redBtnRef={setContactWindow} />
						<Contact />
					</section>
				</Draggable>
			)}
			{themesWindow && (
				<Draggable defaultPosition={{ x: 442, y: 242 }}>
					<section className="window" id="themesWindow">
						<Header title="Themes" redBtnRef={setThemesWindow} />
						<Themes />
					</section>
				</Draggable>
			)}
			{arcadeWindow && (
				<Draggable>
					<section className="window">
						<Header title="Arcade" redBtnRef={setArcadeWindow} />
						<Arcade />
					</section>
				</Draggable>
			)}
			{settingsWindow && (
				<Draggable>
					<section className="window">
						<Header title="Settings" redBtnRef={setSettingsWindow} />
						<Settings />
					</section>
				</Draggable>
			)}
		</>
	);
};

export default Navbar;