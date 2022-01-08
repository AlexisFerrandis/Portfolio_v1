import React from "react";

const Header = (props) => {
	return (
		<div>
			<div className="window-header-bar">
				<div className="window-header-bar__buttons">
					<button onClick={() => props.redBtnRef(false)} className="window-header-buttons round red-button"></button>
					<button className="window-header-buttons round yellow-button"></button>
					<button className="window-header-buttons round green-button"></button>
				</div>
				<div className="window-header-bar__title">{props.title}</div>
			</div>
		</div>
	);
};

export default Header;
