import React from "react";

const Themes = (props) => {
	return (
		<div className="content">
			<div className="theme-illustration" onClick={() => props.themeSelected("default")}>
				<img className="illustration-preview" src="../assets/img/themes/default.png" alt="Classic theme" />
				<p>Classic</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("tartan")}>
				<img className="illustration-preview" src="../assets/img/themes/tartan.png" alt="Tartan theme" />
				<p>Tartan</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("matrix")}>
				<img className="illustration-preview" src="../assets/img/themes/matrix.png" alt="Matrix rain theme" />
				<p>Matrix</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("particles")}>
				<img className="illustration-preview" src="../assets/img/themes/particles.png" alt="Particles theme" />
				<p>Particles</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("gradiant")}>
				<img className="illustration-preview" src="../assets/img/themes/gradiant.png" alt="Gradiant theme" />
				<p>Gradiant</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("bubbles")}>
				<img className="illustration-preview" src="../assets/img/themes/bubbles.png" alt="Bubbles theme" />
				<p>Bubbles</p>
			</div>
			{/* <div className="theme-illustration">
				<img className="illustration-preview" src="./assets/img/themes/soundwave.gif" alt="Soundwave theme" />
				<p>SoundWave</p>
			</div> */}
		</div>
	);
};

export default Themes;
