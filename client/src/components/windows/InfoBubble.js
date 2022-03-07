import React, { useState } from "react";

// Img
import github from "../../assets/icons/github.svg";
import extLink from "../../assets/icons/external-link.svg";

const InfoBubble = (props) => {
	const [infos, setInfos] = useState(false);

	return (
		<>
			<div className="info-bubble">
				<div className="icons">
					{/* {props.infos && (
						<img
							src="../assets/icons/info-circle.svg"
							alt="infos"
							onClick={() => {
								setInfos(true);
							}}
						/>
					)} */}
					{props.github && (
						<a href={props.github} target="_blank" rel="noopener noreferrer">
							<img src={github} alt="github" />
						</a>
					)}
					{props.link && (
						<a href={props.link} target="_blank" rel="noopener noreferrer">
							<img src={extLink} alt="open" />
						</a>
					)}
				</div>
			</div>
			{infos && (
				<div
					className="infos"
					onClick={() => {
						setInfos(!infos);
					}}
				>
					{props.infos}
				</div>
			)}
		</>
	);
};

export default InfoBubble;
