import React, { useState } from "react";
import Draggable from "react-draggable";

import Header from "../windows/Header";

import Welcome from "../windows/Welcome";
import Profil from "../windows/Profil";
import Portfolio from "../windows/Portfolio";
import Contact from "../windows/Contact";
import Themes from "../windows/Themes";
import Arcade from "../windows/Arcade";
import Settings from "../windows/Settings";

const Navbar = () => {
	const [welcomeWindow, setWelcomeWindow] = useState(true);
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
					<img src="./assets/icons/profil-ico.svg" alt="Alexis's profil" />
				</button>
				<button onClick={() => setPortfolioWindow(true)}>
					<img src="./assets/icons/folder-ico.svg" alt="Alexis's portfolio" />
				</button>
				<button onClick={() => setContactWindow(true)}>
					<img src="./assets/icons/contact-ico.svg" alt="Contact" />
				</button>
				<button onClick={() => setThemesWindow(true)}>
					<img src="./assets/icons/themes-ico.svg" alt="Themes selection" />
				</button>
				<button onClick={() => setArcadeWindow(true)}>
					<img src="./assets/icons/arcade-ico.svg" alt="Launch the game !" />
				</button>
				<button onClick={() => setSettingsWindow(true)}>
					<img src="./assets/icons/settings-ico.svg" alt="Settings" />
				</button>
			</div>
			{welcomeWindow && (
				<Draggable defaultPosition={{ x: 42, y: 42 }}>
					<section className="window" id="welcomeWindow">
						<Header title="Welcome" redBtnRef={setWelcomeWindow} />
						<Welcome />
					</section>
				</Draggable>
			)}
			{profilWindow && (
				<Draggable>
					<section className="window">
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
