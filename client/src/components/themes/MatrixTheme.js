import React from "react";

// Img
import afLogo from "../../assets/logo/af-logo.svg";

class MatrixTheme extends React.Component {
	componentDidMount() {
		const canvas = this.refs.matrixCanvas;
		const ctx = canvas.getContext("2d");
		const img = this.refs.img;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let gradient = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
		gradient.addColorStop(0, "#1e88e5");
		gradient.addColorStop(1, "#0d47a1");

		img.onload = () => {
			// Set char
			class Symbol {
				constructor(x, y, fontSize, canvasHeight) {
					this.characters = "ゝゞぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん123456789";
					this.x = x;
					this.y = y;
					this.fontSize = fontSize;
					this.text = "";
					this.canvasHeight = canvasHeight;
				}
				// Draw individual char
				draw(context) {
					this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
					context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
					if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
						this.y = 0;
					} else {
						this.y += 1;
					}
				}
			}

			class Effect {
				// Handle animation
				constructor(canvasWidth, canvasHeight) {
					this.canvasWidth = canvasWidth;
					this.canvasHeight = canvasHeight;
					this.fontSize = 25;
					this.colums = this.canvasWidth / this.fontSize;
					this.symbols = [];
					this.#initialize();
				}
				#initialize() {
					for (let i = 0; i < this.colums; i++) {
						this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
					}
				}
				resize(width, height) {
					this.canvasWidth = width;
					this.canvasHeight = height;
					this.colums = this.canvasWidth / this.fontSize;
					this.symbols = [];
					this.#initialize();
				}
			}

			const effect = new Effect(canvas.width, canvas.height);
			let lastTime = 0;
			const fps = 30;
			const nextFrame = 1000 / fps;
			let timer = 0;

			// Animation loop
			(function animate(timeStamp) {
				const deltaTime = timeStamp - lastTime;
				lastTime = timeStamp;
				if (timer > nextFrame) {
					ctx.fillStyle = "rgba(0,0,0, 0.1)";
					ctx.textAlign = "center";
					ctx.fillRect(0, 0, canvas.width, canvas.height);
					ctx.fillStyle = gradient;
					ctx.font = effect.fontSize + "px monospace";
					effect.symbols.forEach((symbol) => symbol.draw(ctx));
					timer = 0;
				} else {
					timer += deltaTime;
				}
				requestAnimationFrame(animate);
			})(0);

			// Listener
			window.addEventListener("resize", function () {
				this.canvasWidth = window.innerWidth;
				this.canvasHeight = window.innerHeight;
				effect.resize(canvas.width, canvas.height);
			});
		};
	}

	render() {
		return (
			<div className="desktop-theme__matrix">
				<canvas ref="matrixCanvas" id="matrixCanvas" />
				<img ref="img" src={afLogo} alt="logo" className="logo" />
			</div>
		);
	}
}

export default MatrixTheme;
