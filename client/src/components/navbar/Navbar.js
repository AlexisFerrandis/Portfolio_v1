import React, { useState } from "react";
import Draggable from "react-draggable";

import DesktopLogo from "../themes/DesktopLogo";

import DefaultTheme from "../themes/DefaultTheme";
import MatrixTheme from "../themes/MatrixTheme";
import BubblesTheme from "../themes/BubblesTheme";

import Header from "../windows/Header";

import Profil from "../windows/Profil";
import Portfolio from "../windows/Portfolio";
import Contact from "../windows/Contact";
import Themes from "../windows/Themes";
import Arcade from "../windows/Arcade";
import Settings from "../windows/Settings";

const Navbar = () => {
	const [profilWindow, setProfilWindow] = useState(false);
	const [profilContent, setProfilContent] = useState(true);

	const [portfolioWindow, setPortfolioWindow] = useState(false);
	const [portfolioContent, setPortfolioContent] = useState(true);

	const [contactWindow, setContactWindow] = useState(false);
	const [contactContent, setContactContent] = useState(true);

	const [themesWindow, setThemesWindow] = useState(false);
	const [themesContent, setThemesContent] = useState(true);

	const [arcadeWindow, setArcadeWindow] = useState(false);
	const [settingsWindow, setSettingsWindow] = useState(false);

	const [themeSelection, setThemeSelection] = useState("default");

	// const [defaultTheme, setDefaultTheme] = useState(true);
	// const [matrixTheme, setMatrixTheme] = useState(false);
	// const [bubblesTheme, setbubblesTheme] = useState(false);
	// const [particlesTheme, setParticlesTheme] = useState(false);

	return (
		<>
			<div className="theme-display">
				{themeSelection === "default" && <DefaultTheme />}
				{themeSelection === "matrix" && <MatrixTheme />}
				{themeSelection === "bubbles" && <BubblesTheme />}
				<DesktopLogo />
			</div>
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
				<Draggable defaultPosition={{ x: 95, y: 35 }}>
					<section className="window" id="profilWindow">
						<Header title="Profil" redBtnRef={setProfilWindow} yellowBtnRef={setProfilContent} greenBtnRef={setProfilContent} />
						{profilContent && <Profil contactBtn={setContactWindow} />}
					</section>
				</Draggable>
			)}
			{portfolioWindow && (
				<Draggable defaultPosition={{ x: 1032, y: 35 }}>
					<section className="window" id="portfolioWindow">
						<Header title="Portfolio" redBtnRef={setPortfolioWindow} yellowBtnRef={setPortfolioContent} greenBtnRef={setPortfolioContent} />
						{portfolioContent && <Portfolio />}
					</section>
				</Draggable>
			)}
			{contactWindow && (
				<Draggable defaultPosition={{ x: 460, y: 35 }}>
					<section className="window" id="contactWindow">
						<Header title="Contact" redBtnRef={setContactWindow} yellowBtnRef={setContactContent} greenBtnRef={setContactContent} />
						{contactContent && <Contact />}
					</section>
				</Draggable>
			)}
			{themesWindow && (
				<Draggable defaultPosition={{ x: 462, y: 35 }}>
					<section className="window" id="themesWindow">
						<Header title="Themes" redBtnRef={setThemesWindow} yellowBtnRef={setThemesContent} greenBtnRef={setThemesContent} />
						{themesContent && <Themes themeSelected={setThemeSelection} />}
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
