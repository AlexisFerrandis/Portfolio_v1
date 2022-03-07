import React from "react";

// Img
import defaultT from "../../assets/img/themes/default.png";
import tartanT from "../../assets/img/themes/tartan.png";
import matrixT from "../../assets/img/themes/matrix.png";
import particlesT from "../../assets/img/themes/particles.png";
import gradiantT from "../../assets/img/themes/gradiant.png";
import bubblesT from "../../assets/img/themes/bubbles.png";
import cubesT from "../../assets/img/themes/cubes.png";

const Themes = (props) => {
	return (
		<div className="content">
			<div className="theme-illustration" onClick={() => props.themeSelected("default")}>
				<img className="illustration-preview" src={defaultT} alt="Classic theme" />
				<p>Classic</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("tartan")}>
				<img className="illustration-preview" src={tartanT} alt="Tartan theme" />
				<p>Tartan</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("matrix")}>
				<img className="illustration-preview" src={matrixT} alt="Matrix rain theme" />
				<p>Matrix</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("particles")}>
				<img className="illustration-preview" src={particlesT} alt="Particles theme" />
				<p>Particles</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("gradiant")}>
				<img className="illustration-preview" src={gradiantT} alt="Gradiant theme" />
				<p>Gradiant</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("bubbles")}>
				<img className="illustration-preview" src={bubblesT} alt="Bubbles theme" />
				<p>Bubbles</p>
			</div>
			<div className="theme-illustration" onClick={() => props.themeSelected("cubes")}>
				<img className="illustration-preview" src={cubesT} alt="Cubes theme" />
				<p>Cubes</p>
			</div>
		</div>
	);
};

export default Themes;
