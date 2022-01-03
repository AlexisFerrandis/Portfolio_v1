import React from "react";

const DesktopTopSidebar = () => {
	return (
		<div className="desktop-top-sidebar">
			<div>
				<p>AF.OS</p>
			</div>
			<div className="desktop-top-sidebar__date">18 Juil</div>
			<div className="desktop-top-sidebar__options">
				<button type="button" className="desktop-top-sidebar__options--button">
					<img src="./assets/icons/volume-medium-ico.svg" alt="Volume setting button." />
				</button>
				<button type="button" className="desktop-top-sidebar__options--button">
					<img src="./assets/icons/moon-ico.svg" alt="Dark mode option." />
				</button>
				<button type="button" className="desktop-top-sidebar__options--button">
					<img src="./assets/icons/power-off-ico.svg" alt="Refresh the page." />
				</button>
			</div>
		</div>
	);
};

export default DesktopTopSidebar;
