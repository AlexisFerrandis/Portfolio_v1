import React from "react";

const DesktopLeftSidebar = () => {
	return (
		<div className="desktop-left-sidebar">
			<button className="desktop-left-sidebar__button">
				<img src="./assets/icons/profil-ico.svg" alt="Profil button, open Alexis's profil on click." />
			</button>
			<button className="desktop-left-sidebar__button">
				<img src="./assets/icons/folder-ico.svg" alt="Project button, open Alexis's portfolio on click." />
			</button>
			<button className="desktop-left-sidebar__button">
				<img src="./assets/icons/contact-ico.svg" alt="Contact button, open Alexis's contact on click." />
			</button>
			<button className="desktop-left-sidebar__button">
				<img src="./assets/icons/wallpaper-ico.svg" alt="Wallpaper button, open wallpaper's selection on click." />
			</button>
			<button className="desktop-left-sidebar__button">
				<img src="./assets/icons/settings-ico.svg" alt="Settings, personalize desktop" />
			</button>
		</div>
	);
};

export default DesktopLeftSidebar;
