import React, { useState } from "react";
import Draggable from "react-draggable";

import Header from "../windows/Header";

// Windows
import Profil from "../windows/Profil";
import Portfolio from "../windows/Portfolio";
import Contact from "../windows/Contact";
import Themes from "../windows/Themes";
import Arcade from "../windows/Arcade";

// Themes
import DefaultTheme from "../themes/DefaultTheme";
import TartanTheme from "../themes/TartanTheme";
import MatrixTheme from "../themes/MatrixTheme";
import ParticlesTheme from "../themes/ParticlesTheme";
import GradiantTheme from "../themes/GradiantTheme";
import BubblesTheme from "../themes/BubblesTheme";

// Arcade
import FloppyBird from "../arcade/FloppyBird";
import TwoOFourHeight from "../arcade/TwoOFourHeight";

// Projects
import Chatbot from "../projects/perso/chatbot/Chatbot";
import Konsol from "../projects/perso/konsol/Konsol";

const Navbar = () => {
	// Windows
	const [profilWindow, setProfilWindow] = useState(false);
	const [profilContent, setProfilContent] = useState(true);

	const [portfolioWindow, setPortfolioWindow] = useState(false);
	const [portfolioContent, setPortfolioContent] = useState(true);

	const [contactWindow, setContactWindow] = useState(false);
	const [contactContent, setContactContent] = useState(true);

	const [themesWindow, setThemesWindow] = useState(false);
	const [themesContent, setThemesContent] = useState(true);

	const [arcadeWindow, setArcadeWindow] = useState(false);
	const [arcadeContent, setArcadeContent] = useState(true);

	const [themeSelection, setThemeSelection] = useState("default");

	// Projects
	const [chatbotWindow, setChatbotWindow] = useState(false);
	const [chatbotContent, setChatbotContent] = useState(true);

	const [konsolWindow, setKonsolWindow] = useState(false);
	const [konsolContent, setKonsolContent] = useState(true);

	// Arcade
	const [floppyBirdWindow, setFloppyBirdWindow] = useState(false);
	const [floppyBirdContent, setFloppyBirdContent] = useState(true);

	const [twoOFourHeightWindow, setTwoOFourHeightWindow] = useState(false);
	const [twoOFourHeightContent, setTwoOFourHeightContent] = useState(true);

	// ZIndex handler
	const handleZIndex = (e) => {
		const windows = document.querySelectorAll(".window");
		for (let i = 0; i < windows.length; i++) {
			windows[i].style.zIndex = 0;
		}
		e.target.closest(".window").style.zIndex = 1;
	};

	return (
		<>
			{/* Themes renderer */}
			<div className="theme-display">
				{themeSelection === "default" && <DefaultTheme />}
				{themeSelection === "tartan" && <TartanTheme />}
				{themeSelection === "matrix" && <MatrixTheme />}
				{themeSelection === "particles" && <ParticlesTheme />}
				{themeSelection === "gradiant" && <GradiantTheme />}
				{themeSelection === "bubbles" && <BubblesTheme />}
			</div>
			{/* Navbar display */}
			<div className="navbar">
				<button onClick={() => setProfilWindow(!profilWindow)}>
					<img src="../assets/icons/profil.svg" alt="Profil" />
				</button>
				<button onClick={() => setPortfolioWindow(!portfolioWindow)}>
					<img src="../assets/icons/folder.svg" alt="Portfolio" />
				</button>
				<button onClick={() => setContactWindow(!contactWindow)}>
					<img src="../assets/icons/contact.svg" alt="Contact" />
				</button>
				<button onClick={() => setThemesWindow(!themesWindow)}>
					<img src="../assets/icons/themes.svg" alt="Themes" />
				</button>
				<button onClick={() => setArcadeWindow(!arcadeWindow)}>
					<img src="../assets/icons/arcade.svg" alt="Launch the game !" />
				</button>
			</div>
			{/* Windows display */}
			{profilWindow && (
				<Draggable cancel={"button, img, a"}>
					<section
						className="window"
						id="profilWindow"
						onClick={(e) => {
							handleZIndex(e);
						}}
					>
						<Header title="Profil" redBtnRef={setProfilWindow} yellowBtnRef={setProfilContent} greenBtnRef={setProfilContent} />
						{profilContent && <Profil contactBtn={setContactWindow} />}
					</section>
				</Draggable>
			)}
			{portfolioWindow && (
				<Draggable cancel={"button, img, a, .tab, .infos"}>
					<section
						className="window"
						id="portfolioWindow"
						onClick={(e) => {
							handleZIndex(e);
						}}
					>
						<Header title="Projects" redBtnRef={setPortfolioWindow} yellowBtnRef={setPortfolioContent} greenBtnRef={setPortfolioContent} />
						{portfolioContent && <Portfolio chatbot={setChatbotWindow} konsol={setKonsolWindow} />}
					</section>
				</Draggable>
			)}
			{contactWindow && (
				<Draggable cancel={"button, input, textArea, a"}>
					<section
						className="window"
						id="contactWindow"
						onClick={(e) => {
							handleZIndex(e);
						}}
					>
						<Header title="Contact" redBtnRef={setContactWindow} yellowBtnRef={setContactContent} greenBtnRef={setContactContent} />
						{contactContent && <Contact />}
					</section>
				</Draggable>
			)}
			{themesWindow && (
				<Draggable cancel={"button, img"}>
					<section
						className="window"
						id="themesWindow"
						onClick={(e) => {
							handleZIndex(e);
						}}
					>
						<Header title="Themes" redBtnRef={setThemesWindow} yellowBtnRef={setThemesContent} greenBtnRef={setThemesContent} />
						{themesContent && <Themes themeSelected={setThemeSelection} />}
					</section>
				</Draggable>
			)}
			{arcadeWindow && (
				<Draggable cancel={"button, img"}>
					<section
						className="window"
						id="arcadeWindow"
						onClick={(e) => {
							handleZIndex(e);
						}}
					>
						<Header title="Arcade" redBtnRef={setArcadeWindow} yellowBtnRef={setArcadeContent} greenBtnRef={setArcadeContent} />
						{arcadeContent && <Arcade floppyBird={setFloppyBirdWindow} twoOFourHeight={setTwoOFourHeightWindow} />}
					</section>
				</Draggable>
			)}
			{/* Arcade display */}
			<div className="arcade-display">
				{floppyBirdWindow && (
					<Draggable cancel={"button"}>
						<section
							className="window"
							id="floppyBird"
							onClick={(e) => {
								handleZIndex(e);
							}}
						>
							<Header title="FloppyBird" redBtnRef={setFloppyBirdWindow} yellowBtnRef={setFloppyBirdContent} greenBtnRef={setFloppyBirdContent} />
							{floppyBirdContent && <FloppyBird />}
						</section>
					</Draggable>
				)}
				{twoOFourHeightWindow && (
					<Draggable cancel={"button, .key"}>
						<section
							className="window"
							id="twoOFourHeight"
							onClick={(e) => {
								handleZIndex(e);
							}}
						>
							<Header title="2048" redBtnRef={setTwoOFourHeightWindow} yellowBtnRef={setTwoOFourHeightContent} greenBtnRef={setTwoOFourHeightContent} />
							{twoOFourHeightContent && <TwoOFourHeight />}
						</section>
					</Draggable>
				)}
			</div>
			{/* Projects display */}
			{chatbotWindow && (
				<div className="project-display">
					<Draggable cancel={"input, p, button, #chatArea"}>
						<section
							className="window"
							id="chatbot"
							onClick={(e) => {
								handleZIndex(e);
							}}
						>
							<Header title="T.bot" redBtnRef={setChatbotWindow} yellowBtnRef={setChatbotContent} greenBtnRef={setChatbotContent} />
							{chatbotContent && <Chatbot />}
						</section>
					</Draggable>
				</div>
			)}
			{konsolWindow && (
				<div className="project-display">
					<Draggable cancel={"button, .konsol-content"}>
						<section
							className="window"
							id="konsol"
							onClick={(e) => {
								handleZIndex(e);
							}}
						>
							<Header title="KonSol" redBtnRef={setKonsolWindow} yellowBtnRef={setKonsolContent} greenBtnRef={setKonsolContent} />
							{konsolContent && <Konsol />}
						</section>
					</Draggable>
				</div>
			)}
		</>
	);
};

export default Navbar;
