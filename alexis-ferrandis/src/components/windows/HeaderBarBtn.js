import React from "react";

const HeaderBarBtn = (props) => {
	const welcomeWindow = document.getElementById("welcome");
	const profilWindow = document.getElementById("profilWindow");
	const portfolioWindow = document.getElementById("portfolioWindow");
	const contactWindow = document.getElementById("contactWindow");
	const themesWindow = document.getElementById("themesWindow");
	const arcadeWindow = document.getElementById("arcadeWindow");
	const settingsWindow = document.getElementById("settingsWindow");

	function closeWindow(e) {
		switch (e.target.id) {
			case "welcomeBtnClose":
				welcomeWindow.style.display = "none";
				break;
			case "profilWindowBtnClose":
				profilWindow.style.display = "none";
				break;
			case "portfolioWindowBtnClose":
				portfolioWindow.style.display = "none";
				break;
			case "contactWindowBtnClose":
				contactWindow.style.display = "none";
				break;
			case "themesWindowBtnClose":
				themesWindow.style.display = "none";
				break;
			case "arcadeWindowBtnClose":
				arcadeWindow.style.display = "none";
				break;
			case "settingsWindowBtnClose":
				settingsWindow.style.display = "none";
				break;
			default:
				console.log("ERR : No such thing as a close button !");
		}
	}
	function smallerWindow(e) {
		switch (e.target.id) {
			case "welcomeBtnSmaller":
				windowSpecification(welcomeWindow, "20%");
				break;
			case "profilWindowBtnSmaller":
				windowSpecification(profilWindow, "30%");
				break;
			case "portfolioWindowBtnSmaller":
				windowSpecification(portfolioWindow, "40%");
				break;
			case "contactWindowBtnSmaller":
				windowSpecification(contactWindow, "50%");
				break;
			case "themesWindowBtnSmaller":
				windowSpecification(themesWindow, "60%");
				break;
			case "arcadeWindowBtnSmaller":
				windowSpecification(arcadeWindow, "70%");
				break;
			case "settingsWindowBtnSmaller":
				windowSpecification(settingsWindow, "80%");
				break;
			default:
				console.log("ERR : No such thing as a reducer button !");
		}
	}
	function fullScreenWindow(e) {
		switch (e.target.id) {
			case "welcomeBtnFull":
				biggerWindow(welcomeWindow);
				break;
			case "profilWindowBtnFull":
				biggerWindow(profilWindow);
				break;
			case "portfolioWindowBtnFull":
				biggerWindow(portfolioWindow);
				break;
			case "contactWindowBtnFull":
				biggerWindow(contactWindow);
				break;
			case "themesWindowBtnFull":
				biggerWindow(themesWindow);
				break;
			case "arcadeWindowBtnFull":
				biggerWindow(arcadeWindow);
				break;
			case "settingsWindowBtnFull":
				biggerWindow(settingsWindow);
				break;
			default:
				console.log("ERR : No such thing as a full screen button !");
		}
	}
	function windowSpecification(windowId, left) {
		windowId.style.left = left;
		windowId.style.top = "111vh";
		windowId.style.width = "250px";
		windowId.style.height = "270px";
	}
	function biggerWindow(windowId) {
		windowId.style.top = "50%";
		windowId.style.left = "50%";
		windowId.style.width = "80%";
		windowId.style.height = "80%";
	}

	return (
		<div>
			<button onClick={closeWindow} id={props.id + `Close`} className="window-header-buttons round red-button"></button>
			<button onClick={smallerWindow} id={props.id + `Smaller`} className="window-header-buttons round yellow-button"></button>
			<button onClick={fullScreenWindow} id={props.id + `Full`} className="window-header-buttons round green-button"></button>
		</div>
	);
};

export default HeaderBarBtn;
