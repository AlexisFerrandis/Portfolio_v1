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
			<Window title={"Welcome"} content={"Hello World !"} />
		</div>
	);
};

export default Desktop;
