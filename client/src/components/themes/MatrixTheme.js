import React from "react";

class MatrixTheme extends React.Component {
	componentDidMount() {
		// 	const canvas = this.refs.matrixCanvas;
		// 	const ctx = canvas.getContext("2d");
		// 	const img = this.refs.img;
		// 	canvas.width = window.innerWidth;
		// 	canvas.height = window.innerHeight;
		// 	img.onload = () => {
		// 		class Symbol {
		// 			constructor(){
		// 			}
		// 			draw() {
		// 			}
		// 		}
		// 		class Effect {
		// 			constructor(canvasWidth, canvasHeight){
		// 				this.canvasWidth = canvasWidth;
		// 				this.canvasHeight = canvasHeight;
		// 				this.fontSize = 25;
		// 				this.colums = this.canvasWidth/this.fontSize;
		// 				this.symbols = [];
		// 			}
		// 			initialize(){
		// 			}
		// 		}
		// 		function animate() {
		// 		}
		// 	};
	}

	render() {
		return (
			<div className="desktop-theme__matrix">
				<canvas ref="matrixCanvas" id="matrixCanvas" />
				<img ref="img" src="./assets/logo/af-logo.svg" alt="Alexis Ferrandis's logo" className="hidden" />
			</div>
		);
	}
}

export default MatrixTheme;
