import React from "react";

const LeftSideBarButton = (props) => {
	const profilWindow = document.getElementById("profilWindow");
	const portfolioWindow = document.getElementById("portfolioWindow");
	const contactWindow = document.getElementById("contactWindow");
	const themesWindow = document.getElementById("themesWindow");
	const arcadeWindow = document.getElementById("arcadeWindow");
	const settingsWindow = document.getElementById("settingsWindow");
	function open(e) {
		switch (e.target.id) {
			case "sideBarProfilBtn":
				profilWindow.style.display = "block";
				break;
			case "sideBarPortfolioBtn":
				portfolioWindow.style.display = "block";
				break;
			case "sideBarContactBtn":
				contactWindow.style.display = "block";
				break;
			case "sideBarThemesBtn":
				themesWindow.style.display = "block";
				break;
			case "sideBarArcadeBtn":
				arcadeWindow.style.display = "block";
				break;
			case "sideBarSettingsBtn":
				settingsWindow.style.display = "block";
				break;
			default:
				console.log("ERR : Didn't find this window :/");
		}
	}
	return (
		<button onClick={open} className="desktop-left-sidebar__button">
			<img id={props.id} src={props.iconePath} alt={props.iconeAlt} />
		</button>
	);
};

export default LeftSideBarButton;
