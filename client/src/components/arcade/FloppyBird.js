import React from "react";
import Draggable from "react-draggable";
import Header from "../windows/Header";

class FloppyBird extends React.Component {
	componentDidMount() {
		const canvas = this.refs.floppyBirdCanvas;
		const ctx = canvas.getContext("2d");
		const loadImg = this.refs.img;
		const img = new Image();

		loadImg.onload = () => {
			img.src = "./assets/img/arcade/floppy-bird/floppy-bird-set.png";

			// General settings
			let gamePlaying = false;
			const gravity = 0.5;
			const speed = 6.2;
			const size = [51, 36];
			const jump = -11.5;
			const cTenth = canvas.width / 10;

			// Pipe settings
			const pipeWidth = 78;
			const pipeGap = 270;
			const pipeLoc = () => Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) + pipeWidth;

			// Variables declaration
			let index = 0,
				bestScore = 0,
				currentScore = 0,
				pipes = [],
				flight,
				flyHeight;

			// Actualising the game
			const setup = () => {
				currentScore = 0;
				flight = jump;
				flyHeight = canvas.height / 2 - size[1] / 2;

				pipes = Array(3)
					.fill()
					.map((a, i) => [canvas.width + i * (pipeGap + pipeWidth), pipeLoc()]);
			};

			const render = () => {
				index++;
				// Background renderer
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width), 0, canvas.width, canvas.height);

				if (gamePlaying) {
					// Bird physics
					ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
					flight += gravity;
					flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
				} else {
					// Bird renderer
					ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, canvas.width / 2 - size[0] / 2, flyHeight, ...size);
					flyHeight = canvas.height / 2 - size[1] / 2;
				}

				// Pipe display
				if (gamePlaying) {
					pipes.map((pipe) => {
						pipe[0] -= speed;

						// Top pipe
						ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);
						// Bottom pipe
						ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);

						if (pipe[0] <= -pipeWidth) {
							currentScore++;
							bestScore = Math.max(bestScore, currentScore);

							// Remove pipe and create new one
							pipes = [...pipes.slice(1), [pipes[pipes.length - 1][0] + pipeGap + pipeWidth, pipeLoc()]];
						}

						// End if hit the pipe
						if ([pipe[0] <= cTenth + size[0], pipe[0] + pipeWidth >= cTenth, pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]].every((elem) => elem)) {
							gamePlaying = false;
							setup();
						}

						return true;
					});
				}

				document.getElementById("bestScore").innerHTML = `Best : ${bestScore}`;
				document.getElementById("currentScore").innerHTML = `${currentScore}`;

				window.requestAnimationFrame(render);
			};

			setup();
			img.onload = render;

			canvas.addEventListener("click", () => {
				gamePlaying = true;
			});
			canvas.addEventListener(
				"touchstart",
				() => {
					gamePlaying = true;
				},
				false
			);
			canvas.onclick = () => (flight = jump);
			canvas.ontouchstart = () => (flight = jump);
		};
	}

	render() {
		return (
			<Draggable defaultPosition={{ x: 0, y: 0 }}>
				<section className="window" id="floppyBird">
					<Header title="FloppyBird" /* redBtnRef={console.log("tutu")} yellowBtnRef={setProfilContent} greenBtnRef={setProfilContent} */ />
					<div className="arcade__floppy-bird">
						<header>
							<h5>Floppy Bird</h5>
							<div className="score-container">
								<div id="bestScore"></div>
								<div id="currentScore"></div>
							</div>
						</header>
						<canvas ref="floppyBirdCanvas" id="floppyBirdCanvas" width="360" height="650"></canvas>
						<img ref="img" src="./assets/logo/af-black-logo.svg" alt="Alexis Ferrandis's logo" className="hidden" />
					</div>
				</section>
			</Draggable>
		);
	}
}

export default FloppyBird;
