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
				smallerSpecification(welcomeWindow, "20%");
				break;
			case "profilWindowBtnSmaller":
				smallerSpecification(profilWindow, "30%");
				break;
			case "portfolioWindowBtnSmaller":
				smallerSpecification(portfolioWindow, "40%");
				break;
			case "contactWindowBtnSmaller":
				smallerSpecification(contactWindow, "50%");
				break;
			case "themesWindowBtnSmaller":
				smallerSpecification(themesWindow, "60%");
				break;
			case "arcadeWindowBtnSmaller":
				smallerSpecification(arcadeWindow, "70%");
				break;
			case "settingsWindowBtnSmaller":
				smallerSpecification(settingsWindow, "80%");
				break;
			default:
				console.log("ERR : No such thing as a reducer button !");
		}
	}
	function fullScreenWindow(e) {
		switch (e.target.id) {
			case "welcomeBtnFull":
				biggerWindow(welcomeWindow, "45%", "50%", "80%", "50%");
				break;
			case "profilWindowBtnFull":
				biggerWindow(profilWindow, "48%");
				break;
			case "portfolioWindowBtnFull":
				biggerWindow(portfolioWindow, "51%");
				break;
			case "contactWindowBtnFull":
				biggerWindow(contactWindow, "54%");
				break;
			case "themesWindowBtnFull":
				biggerWindow(themesWindow, "57%");
				break;
			case "arcadeWindowBtnFull":
				biggerWindow(arcadeWindow, "60%");
				break;
			case "settingsWindowBtnFull":
				biggerWindow(settingsWindow, "63%");
				break;
			default:
				console.log("ERR : No such thing as a full screen button !");
		}
	}
	function smallerSpecification(windowId, left) {
		windowId.style.left = left;
		windowId.style.top = "111vh";
		windowId.style.width = "290px";
		windowId.style.height = "270px";
	}
	function biggerWindow(windowId, top = "50%", left = "50%", width = "80%", height = "80%") {
		windowId.style.top = top;
		windowId.style.left = left;
		windowId.style.width = width;
		windowId.style.height = height;
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
