import React from "react";

const HeaderBarBtn = () => {
	let windows = document.querySelectorAll(".window");
	function closeWindow() {
		for (let i = 0; i < windows.length; i++) {
			windows[i].style.display = "none";
		}
	}
	function fullScreenWindow() {
		for (let i = 0; i < windows.length; i++) {
			windows[i].style.width = "80vw";
			windows[i].style.height = "80vh";
		}
	}

	return (
		<div>
			<button onClick={closeWindow} className="round red-button"></button>
			<button onClick={closeWindow} className="round yellow-button"></button>
			<button onClick={fullScreenWindow} className="round green-button"></button>
		</div>
	);
};

export default HeaderBarBtn;
