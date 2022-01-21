import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<div>
			<div className="header">
				<div className="buttons">
					<BrowserRouter>
						<NavLink to="/">
							<button onClick={() => props.redBtnRef(false)} className="round red-button"></button>
						</NavLink>
						<button onClick={() => props.yellowBtnRef(false)} className="round yellow-button"></button>
						<button onClick={() => props.greenBtnRef(true)} className="round green-button"></button>
					</BrowserRouter>
				</div>
				<div className="title">{props.title}</div>
			</div>
		</div>
	);
};

export default Header;
