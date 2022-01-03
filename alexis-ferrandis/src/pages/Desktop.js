import React from "react";
import DesktopTopSidebar from "../components/DesktopTopSidebar";
import DesktopLeftSidebar from "../components/DesktopLeftSidebar";
import DesktopWidget from "../components/DesktopWidget";

const Desktop = () => {
	return (
		<>
			<DesktopTopSidebar />
			<DesktopLeftSidebar />
			<DesktopWidget />
		</>
	);
};

export default Desktop;
