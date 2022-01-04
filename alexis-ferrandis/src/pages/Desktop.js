import React from "react";
import DesktopTopSidebar from "../components/desktop-top-sidebar/DesktopTopSidebar";
import DesktopLeftSidebar from "../components/desktop-left-sidebar/DesktopLeftSidebar";
import DesktopThemes from "../components/DesktopThemes";
import Window from "../components/windows/Window";
import DesktopLogo from "../components/DesktopLogo";

const Desktop = () => {
	return (
		<div id="desktop">
			<DesktopTopSidebar />
			<DesktopLeftSidebar />
			<DesktopThemes />
			<DesktopLogo />
			<Window id={"welcome"} title={"Welcome"} content={"Hello World !"} />
			<Window id={"profilWindow"} title={"Profil"} content={"Hi, i'm Alexis !"} />
			<Window id={"portfolioWindow"} title={"Portfolio"} content={"My Portfolio :)"} />
			<Window id={"contactWindow"} title={"Contact"} content={"U can contact me here :)"} />
			<Window id={"themesWindow"} title={"Themes"} content={"Select a theme :)"} />
			<Window id={"arcadeWindow"} title={"Arcade"} content={"Game !"} />
			<Window id={"settingsWindow"} title={"Settings"} content={"SETTTINNNNNNNNNNNNNNNGS"} />
		</div>
	);
};

export default Desktop;
