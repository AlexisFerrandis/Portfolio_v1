import React, { useState } from "react";

const InfoBubble = (props) => {
	const [infos, setInfos] = useState(false);

	return (
		<>
			<div className="info-bubble">
				<div className="icons">
					{props.infos && (
						<img
							src="../assets/icons/info-circle.svg"
							alt="infos"
							onClick={() => {
								setInfos(true);
							}}
						/>
					)}
					{props.github && (
						<a href={props.github}>
							<img src="../assets/icons/github-circle.svg" alt="github" />
						</a>
					)}
					{props.link && (
						<a href={props.link}>
							<img src="../assets/icons/external-link.svg" alt="open" />
						</a>
					)}
				</div>
			</div>
			{infos && (
				<div
					className="infos"
					onClick={() => {
						setInfos(false);
					}}
				>
					{props.infos}
				</div>
			)}
		</>
	);
};

export default InfoBubble;
