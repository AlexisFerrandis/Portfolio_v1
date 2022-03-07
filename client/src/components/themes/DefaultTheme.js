import React from "react";

// Img
import afLogo from "../../assets/logo/af-logo.svg";

const DefaultTheme = () => {
	return (
		<>
			<div className="desktop-theme__cloud">
				<div className="cloud cloud__one"></div>
				<div className="cloud cloud__two"></div>
				<div className="cloud cloud__three"></div>
				<div className="cloud cloud__four"></div>
				<img src={afLogo} alt="alexis's logo" className="logo" />
			</div>
		</>
	);
};

export default DefaultTheme;
