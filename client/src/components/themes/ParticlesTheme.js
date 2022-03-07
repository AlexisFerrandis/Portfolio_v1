import React from "react";

// Img
import afLogo from "../../assets/logo/af-logo.svg";

class ParticlesTheme extends React.Component {
	componentDidMount() {
		const canvas = this.refs.particlesCanvas;
		const ctx = canvas.getContext("2d");
		const img = this.refs.img;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let innerWidth = window.innerWidth + 1000;
		let innerHeight = window.innerHeight;

		img.onload = () => {
			let particlesArray;
			canvas.style.background = "#0d47a1";

			// Personnalisation
			// let mouseRadius = 120;
			// let particleColor = "#64b5f6";
			// let particleSize = 3;
			// let strokeColor = "100, 181, 246,";
			// let PartclesNumber = 200;
			// let particleSpeed = 4;

			let mouse = {
				x: null,
				y: null,
				radius: (canvas.height / 120) * (canvas.width / 120),
			};

			window.addEventListener("mousemove", function (event) {
				mouse.x = event.x;
				mouse.y = event.y;
			});

			// Create particles
			class Particle {
				constructor(x, y, directionX, directionY, size, color) {
					this.x = x;
					this.y = y;
					this.directionX = directionX;
					this.directionY = directionY;
					this.size = size;
					this.color = color;
				}
				// Draw individual particle
				draw() {
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
					ctx.fillStyle = "#64b5f6";
					ctx.fill();
				}
				// Check positions, draw and move the particles
				update() {
					if (this.x > canvas.width || this.x < 0) {
						this.directionX = -this.directionX;
					}
					if (this.y > canvas.width || this.y < 0) {
						this.directionY = -this.directionY;
					}

					// Check collision detection
					let dx = mouse.x - this.x;
					let dy = mouse.y - this.y;
					let distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < mouse.radius + this.size) {
						if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
							this.x += 10;
						}
						if (mouse.x > this.x && this.x < this.size * 10) {
							this.x -= 10;
						}
						if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
							this.y += 10;
						}
						if (mouse.y > this.y && this.y > this.size * 10) {
							this.y -= 10;
						}
					}
					// Move particle
					this.x += this.directionX;
					this.y += this.directionY;
					this.draw();
				}
			}

			// Create particle array
			function init() {
				particlesArray = [];
				let numberOfParticles = (canvas.height * canvas.width) / 100000;
				for (let i = 0; i < numberOfParticles * 2 + 200; i++) {
					let size = Math.random() * 5 + 3;
					let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
					let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
					let directionX = Math.random() * 4 - 2.5;
					let directionY = Math.random() * 4 - 2.5;
					let color = "#64b5f6";

					particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
				}
			}

			// Check if particles are close enough to draw a line between them
			function connect() {
				let opacityValue = 1;
				for (let a = 0; a < particlesArray.length; a++) {
					for (let b = a; b < particlesArray.length; b++) {
						let distance = (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) + (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);

						if (distance < (canvas.width / 7) * (canvas.height / 7)) {
							opacityValue = 1 - distance / 20000;
							ctx.strokeStyle = "rgba(100, 181, 246," + opacityValue + " )";
							ctx.lineWidth = 1;
							ctx.beginPath();
							ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
							ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
							ctx.stroke();
						}
					}
				}
			}

			// Animation loop
			function animate() {
				requestAnimationFrame(animate);
				ctx.clearRect(0, 0, innerWidth, innerHeight);

				for (let i = 0; i < particlesArray.length; i++) {
					particlesArray[i].update();
				}
				connect();
			}

			// Resize event
			window.addEventListener("resize", function () {
				canvas.width = innerWidth;
				canvas.height = innerHeight;
				mouse.radius = (canvas.height / 80) * (canvas.height / 80);
				init();
			});

			//mouse out event
			window.addEventListener("mouseout", function () {
				mouse.x = undefined;
				mouse.y = undefined;
			});

			init();
			animate();
		};
	}

	render() {
		return (
			<div className="desktop-theme__particles">
				<canvas ref="particlesCanvas" id="particlesCanvas" />
				<img ref="img" src={afLogo} alt="logo" className="logo" />
			</div>
		);
	}
}

export default ParticlesTheme;
