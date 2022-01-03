import React from "react";
import DesktopTopSidebar from "../components/DesktopTopSidebar";
import DesktopLeftSidebar from "../components/DesktopLeftSidebar";
import DesktopWallpaper from "../components/DesktopWallpaper";

const Desktop = () => {
	return (
		<>
			<DesktopWallpaper />
			<DesktopTopSidebar />
			<DesktopLeftSidebar />
		</>
	);
};

export default Desktop;
