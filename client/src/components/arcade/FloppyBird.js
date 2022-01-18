import React from "react";

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

			const pipeWidth = 78;
			const pipeGap = 270;
			const pipeLoc = () => Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) + pipeWidth;

			let index = 0,
				bestScore = 0,
				currentScore = 0,
				pipes = [],
				flight,
				flyHeight;

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
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width), 0, canvas.width, canvas.height);

				if (gamePlaying) {
					ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
					flight += gravity;
					flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
				} else {
					ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, canvas.width / 2 - size[0] / 2, flyHeight, ...size);
					flyHeight = canvas.height / 2 - size[1] / 2;
				}

				if (gamePlaying) {
					pipes.map((pipe) => {
						pipe[0] -= speed;

						ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);
						ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);
						if (pipe[0] <= -pipeWidth) {
							currentScore++;
							bestScore = Math.max(bestScore, currentScore);
							pipes = [...pipes.slice(1), [pipes[pipes.length - 1][0] + pipeGap + pipeWidth, pipeLoc()]];
						}
						if ([pipe[0] <= cTenth + size[0], pipe[0] + pipeWidth >= cTenth, pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]].every((elem) => elem)) {
							gamePlaying = false;
							setup();
						}

						return true;
					});
				}

				ctx.fillText(`Best score : ${bestScore}`, 5, 20);
				ctx.fillText(`${currentScore}`, 330, 20);
				ctx.font = '12px "Press Start 2P"';

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
			<div className="arcade__floppy-bird">
				<h5>Floppy Bird</h5>
				<canvas ref="floppyBirdCanvas" id="floppyBirdCanvas" width="360" height="650"></canvas>
				<img ref="img" src="./assets/icons/loader.svg" alt="Alexis Ferrandis's logo" className="hidden" />
			</div>
		);
	}
}

export default FloppyBird;
