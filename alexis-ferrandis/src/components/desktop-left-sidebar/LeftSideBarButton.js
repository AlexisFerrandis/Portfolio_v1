import React from "react";

const LeftSideBarButton = (props) => {
	return (
		<button className="desktop-left-sidebar__button">
			<img src={props.iconePath} alt={props.iconeAlt} />
		</button>
	);
};

export default LeftSideBarButton;
