import React from "react";

const Themes = (props) => {
	return (
		<div className="content">
			<div className="theme-illustration" onClick={() => props.themeSelected("matrix")}>
				<img src="./assets/img/themes/matrix-rain.gif" alt="Matrix rain theme" />
				<p>Matrix</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("particles")}>
				<img src="./assets/img/themes/particles.gif" alt="Particles theme" />
				<p>Particles</p>
			</div>
			<div className="theme-illustration">
				<img src="./assets/img/themes/gradiant.gif" alt="Gradiant theme" />
				<p>Gradiant</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("bubbles")}>
				<img src="./assets/img/themes/bubbles.gif" alt="Bubbles theme" />
				<p>Bubbles</p>
			</div>
			<div className="theme-illustration">
				<img src="./assets/img/themes/tartan.jpg" alt="Tartan theme" />
				<p>Tartan</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("default")}>
				<img src="./assets/img/themes/cloud.gif" alt="Classic theme" />
				<p>Classic</p>
			</div>
			<div className="theme-illustration">
				<img src="./assets/img/themes/soundwave.gif" alt="Soundwave theme" />
				<p>SoundWave</p>
			</div>
		</div>
	);
};

export default Themes;
