import React, { useState } from "react";
import Draggable from "react-draggable";

import Header from "../windows/Header";

import Profil from "../windows/Profil";
import Portfolio from "../windows/Portfolio";
import Contact from "../windows/Contact";
import Themes from "../windows/Themes";
import Arcade from "../windows/Arcade";

import DefaultTheme from "../themes/DefaultTheme";
import TartanTheme from "../themes/TartanTheme";
import MatrixTheme from "../themes/MatrixTheme";
import ParticlesTheme from "../themes/ParticlesTheme";
import GradiantTheme from "../themes/GradiantTheme";
import BubblesTheme from "../themes/BubblesTheme";

import FloppyBird from "../arcade/FloppyBird";
import TwoOFourHeight from "../arcade/TwoOFourHeight";

import Netfloux from "../projects/perso/netfloux/Netfloux";
import Chatbot from "../projects/perso/chatbot/Chatbot";

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
	const [arcadeContent, setArcadeContent] = useState(true);

	const [themeSelection, setThemeSelection] = useState("default");

	// projects
	const [netflouxWindow, setNetflouxWindow] = useState(false);
	const [netflouxContent, setNetflouxContent] = useState(true);

	const [chatbotWindow, setChatbotWindow] = useState(false);
	const [chatbotContent, setChatbotContent] = useState(true);

	// arcade
	const [floppyBirdWindow, setFloppyBirdWindow] = useState(false);
	const [floppyBirdContent, setFloppyBirdContent] = useState(true);

	const [twoOFourHeightWindow, setTwoOFourHeightWindow] = useState(false);
	const [twoOFourHeightContent, setTwoOFourHeightContent] = useState(true);

	const handleZIndex = (e) => {
		const windows = document.querySelectorAll(".window");
		for (let i = 0; i < windows.length; i++) {
			windows[i].style.zIndex = 0;
		}
		e.target.closest(".window").style.zIndex = 1;
	};

	return (
		<>
			<div className="theme-display">
				{themeSelection === "default" && <DefaultTheme />}
				{themeSelection === "tartan" && <TartanTheme />}
				{themeSelection === "matrix" && <MatrixTheme />}
				{themeSelection === "particles" && <ParticlesTheme />}
				{themeSelection === "gradiant" && <GradiantTheme />}
				{themeSelection === "bubbles" && <BubblesTheme />}
			</div>
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
			{profilWindow && (
				<Draggable positionOffset={{ x: "10%", y: "10%" }}>
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
				<Draggable defaultPosition={{ x: 2, y: 35 }}>
					<section
						className="window"
						id="portfolioWindow"
						onClick={(e) => {
							handleZIndex(e);
						}}
					>
						<Header title="Portfolio" redBtnRef={setPortfolioWindow} yellowBtnRef={setPortfolioContent} greenBtnRef={setPortfolioContent} />
						{portfolioContent && <Portfolio netfloux={setNetflouxWindow} chatbot={setChatbotWindow} />}
					</section>
				</Draggable>
			)}
			{contactWindow && (
				<Draggable defaultPosition={{ x: 460, y: 35 }}>
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
				<Draggable defaultPosition={{ x: 462, y: 35 }}>
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
				<Draggable defaultPosition={{ x: 90, y: 105 }}>
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
			{/* arcade */}
			<div className="arcade-display">
				{floppyBirdWindow && (
					<Draggable defaultPosition={{ x: 0, y: 0 }}>
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
					<Draggable defaultPosition={{ x: 0, y: 0 }}>
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
			{/* project */}
			{netflouxWindow && (
				<div className="project-display">
					<Draggable defaultPosition={{ x: 0, y: 0 }}>
						<section
							className="window"
							id="netfloux"
							onClick={(e) => {
								handleZIndex(e);
							}}
						>
							<Header title="Netfloux" redBtnRef={setNetflouxWindow} yellowBtnRef={setNetflouxContent} greenBtnRef={setNetflouxContent} />
							{netflouxContent && <Netfloux />}
						</section>
					</Draggable>
				</div>
			)}
			{chatbotWindow && (
				<div className="project-display">
					<Draggable defaultPosition={{ x: 0, y: 0 }}>
						<section
							className="window"
							id="chatbot"
							onClick={(e) => {
								handleZIndex(e);
							}}
						>
							<Header title="Chatbot" redBtnRef={setChatbotWindow} yellowBtnRef={setChatbotContent} greenBtnRef={setChatbotContent} />
							{chatbotContent && <Chatbot />}
						</section>
					</Draggable>
				</div>
			)}
		</>
	);
};

export default Navbar;
