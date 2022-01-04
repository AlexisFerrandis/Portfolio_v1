import React from "react";
import LeftSideBarButton from "./LeftSideBarButton";

const DesktopLeftSidebar = () => {
	return (
		<div className="desktop-left-sidebar">
			<LeftSideBarButton id="sideBarProfilBtn" iconePath={"./assets/icons/profil-ico.svg"} iconeAlt={"Profil button, open Alexis's profil on click."} />
			<LeftSideBarButton id="sideBarPortfolioBtn" iconePath={"./assets/icons/folder-ico.svg"} iconeAlt={"Project button, open Alexis's portfolio on click."} />
			<LeftSideBarButton id="sideBarContactBtn" iconePath={"./assets/icons/contact-ico.svg"} iconeAlt={"Contact button, open Alexis's contact on click."} />
			<LeftSideBarButton id="sideBarThemesBtn" iconePath={"./assets/icons/themes-ico.svg"} iconeAlt={"Themes button, open themes's selection on click."} />
			<LeftSideBarButton id="sideBarArcadeBtn" iconePath={"./assets/icons/arcade-ico.svg"} iconeAlt={"Launch the game !"} />
			<LeftSideBarButton id="sideBarSettingsBtn" iconePath={"./assets/icons/settings-ico.svg"} iconeAlt={"Settings, personalize desktop"} />
		</div>
	);
};

export default DesktopLeftSidebar;
