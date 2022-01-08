import React from "react";
import Navbar from "./navbar/Navbar";

import DefaultTheme from "./themes/DefaultTheme";
import DesktopLogo from "./themes/DesktopLogo";

const Desktop = () => {
	return (
		<div>
			<DefaultTheme />
			<DesktopLogo />
			<Navbar />
		</div>
	);
};

export default Desktop;
