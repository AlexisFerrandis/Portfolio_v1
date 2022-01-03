import React from "react";
import DesktopTopSidebar from "../components/DesktopTopSidebar";
import DesktopLeftSidebar from "../components/DesktopLeftSidebar";
import DesktopThemes from "../components/DesktopThemes";
import Window from "../components/Window";

const Desktop = () => {
	return (
		<>
			<DesktopThemes />
			<DesktopTopSidebar />
			<DesktopLeftSidebar />
			<Window />
		</>
	);
};

export default Desktop;
