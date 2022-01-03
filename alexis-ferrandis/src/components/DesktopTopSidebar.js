import React from "react";

const DesktopTopSidebar = () => {
	return (
		<div className="desktop-top-sidebar">
			<div className="desktop-top-sidebar__options">
				<button type="button" className="desktop-top-sidebar__options--button">
					<img src="./assets/icons/volume-off-ico.svg" alt="Volume setting button." />
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
