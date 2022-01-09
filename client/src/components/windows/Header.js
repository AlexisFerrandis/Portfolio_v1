import React from "react";

const Header = (props) => {
	return (
		<div>
			<div className="window-header-bar">
				<div className="window-header-bar__buttons">
					<button onClick={() => props.redBtnRef(false)} className="round red-button"></button>
					<button
						onClick={(e) => {
							e.target.closest("section").classList.add("bottom-window");
						}}
						className="round yellow-button"
					></button>
					<button className="round green-button"></button>
				</div>
				<div className="window-header-bar__title">{props.title}</div>
			</div>
		</div>
	);
};

export default Header;
