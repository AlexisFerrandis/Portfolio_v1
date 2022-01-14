import React from "react";

const Header = (props) => {
	return (
		<div>
			<div className="header">
				<div className="buttons">
					<button onClick={() => props.redBtnRef(false)} className="round red-button"></button>
					<button className="round yellow-button"></button>
					<button className="round green-button"></button>
				</div>
				<div className="title">{props.title}</div>
			</div>
		</div>
	);
};

export default Header;
