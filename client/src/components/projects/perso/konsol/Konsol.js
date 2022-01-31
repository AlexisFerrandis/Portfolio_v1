import React from "react";

class Konsol extends React.Component {
	componentDidMount() {
		// Logo particle
		const canvas = document.getElementById("canvasLogo");
		const ctx = canvas.getContext("2d");

		canvas.width = 370;
		canvas.height = 370;
		let particleArray = [];
		let adjustX = 1;
		let adjustY = -1;

		//handle house
		const mouse = {
			x: null,
			y: null,
			radius: 100,
		};

		window.addEventListener("mousemove", (e) => {
			let rect = canvas.getBoundingClientRect();
			let scaleX = canvas.width / rect.width;
			let scaleY = canvas.height / rect.height;

			mouse.x = (e.clientX - rect.left) * scaleX;
			mouse.y = (e.clientY - rect.top) * scaleY;
		});

		ctx.fillStyle = "white";
		ctx.font = "700 0.9em Noto Sans KR";
		ctx.fillText("음악", 0, 20);

		const textCoordinate = ctx.getImageData(0, 0, canvas.width, canvas.height);

		class Particle {
			constructor(x, y) {
				this.x = x;
				this.y = y;
				this.size = 3;
				this.baseX = this.x;
				this.baseY = this.y;
				this.density = Math.random() * 40 + 5;
			}
			draw() {
				ctx.fillStyle = "white";
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
			}
			update() {
				let dx = mouse.x - this.x;
				let dy = mouse.y - this.y;
				let distance = Math.sqrt(dx * dx + dy * dy);
				let forceDirectionX = dx / distance;
				let forceDirectionY = dy / distance;
				let maxDistance = mouse.radius;
				let force = (maxDistance - distance) / maxDistance;
				let directionX = forceDirectionX * force * this.density;
				let directionY = forceDirectionY * force * this.density;
				if (distance < mouse.radius) {
					this.x -= directionX;
					this.y -= directionY;
				} else {
					if (this.x !== this.baseX) {
						let dx = this.x - this.baseX;
						this.x -= dx / 10;
					}
					if (this.y !== this.baseY) {
						let dy = this.y - this.baseY;
						this.y -= dy / 10;
					}
				}
			}
		}

		function init() {
			particleArray = [];
			for (let y = 0, y2 = textCoordinate.height; y < y2; y++) {
				for (let x = 0, x2 = textCoordinate.width; x < x2; x++) {
					if (textCoordinate.data[y * 4 * textCoordinate.width + x * 4 + 3] > 128) {
						let positionX = x + adjustX;
						let positionY = y + adjustY;
						particleArray.push(new Particle(positionX * 13, positionY * 13));
					}
				}
			}
		}
		init();

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particleArray.length; i++) {
				particleArray[i].draw();
				particleArray[i].update();
			}
			connect();
			requestAnimationFrame(animate);
		}
		animate();

		function connect() {
			let opacityValue = 1;
			for (let a = 0; a < particleArray.length; a++) {
				for (let b = a; b < particleArray.length; b++) {
					let dx = particleArray[a].x - particleArray[b].x;
					let dy = particleArray[a].y - particleArray[b].y;
					let distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 12) {
						opacityValue = 1 - distance / 12;
						ctx.strokeStyle = `rgba(117, 219, 205,` + opacityValue + ` )`;
						ctx.lineWidth = 2;
						ctx.beginPath();
						ctx.moveTo(particleArray[a].x, particleArray[a].y);
						ctx.lineTo(particleArray[b].x, particleArray[b].y);
						ctx.stroke();
					}
				}
			}
		}

		// citation
		const domCitation = document.getElementById("citation");

		(function textDisplay() {
			setTimeout(function () {
				let divToDisplay = `<p class="typewriter">"더 순수한 진동의 <span>근원을</span> 찾아 이곳에서 작가는 감각의 재발견을 시작합니다. 자연과 차크라와 밀접하게 연결된 음악은 내면 깊은 곳에서 에너지를 끌어냅니다. 자비와 조화를 지키는 것이 이 불꽃 감각에 기여합니다."</p>`;
				domCitation.innerHTML = divToDisplay;
				domCitation.style.opacity = "1";
				let textToDisplay = document.querySelector(".typewriter").textContent;
				let length = textToDisplay.length;
				let timeOut;
				let character = 0;

				(function typeWriter() {
					timeOut = setTimeout(function () {
						character++;
						let type = textToDisplay.substring(0, character);
						domCitation.innerHTML = type;
						typeWriter();

						if (character === length) {
							clearTimeout(timeOut);
						}
					}, 25);
				})();
			}, 25);
		})();

		// song play
		const songOne = new Audio("../assets/songs/song-one.mp3");
		const songTwo = new Audio("../assets/songs/song-two.mp3");
		const songThree = new Audio("../assets/songs/song-three.mp3");

		const players = document.querySelectorAll(".play");
		for (let i = 0; i < players.length; i++) {
			players[i].addEventListener("click", () => {
				switch (players[i].id) {
					case "songOneBtn":
						songOne.play();
						songTwo.pause();
						songThree.pause();
						break;
					case "songTwoBtn":
						songTwo.play();
						songOne.pause();
						songThree.pause();
						break;
					case "songThreeBtn":
						songThree.play();
						songTwo.pause();
						songOne.pause();
						break;
					default:
						console.log("err");
				}
			});
		}
		const pausers = document.querySelectorAll(".pause");
		for (let i = 0; i < pausers.length; i++) {
			pausers[i].addEventListener("click", () => {
				switch (pausers[i].id) {
					case "songOnePause":
						songOne.pause();
						break;
					case "songTwoPause":
						songTwo.pause();
						break;
					case "songThreePause":
						songThree.pause();
						break;
					default:
						console.log("err");
				}
			});
		}

		// song canvas
		class Microphone {
			constructor() {
				this.initialized = false;
				navigator.mediaDevices
					.getUserMedia({ audio: true })
					.then(
						function (stream) {
							this.audioContext = new AudioContext();
							this.microphone = this.audioContext.createMediaStreamSource(stream);
							this.analyser = this.audioContext.createAnalyser();
							this.analyser.ffSize = 512;
							const bufferLenght = this.analyser.frequencyBinCount;
							this.dataArray = new Uint8Array(bufferLenght);
							this.microphone.connect(this.analyser);
							this.initialized = true;
						}.bind(this)
					)
					.catch(function (err) {
						alert(err);
					});
			}
			getSamples() {
				this.analyser.getByteTimeDomainData(this.dataArray);
				let normSamples = [...this.dataArray].map((e) => e / 128 - 1);
				return normSamples;
			}
			getVolume() {
				this.analyser.getByteTimeDomainData(this.dataArray);
				let normSamples = [...this.dataArray].map((e) => e / 128 - 1);
				let sum = 0;
				for (let i = 0; i < normSamples.length; i++) {
					sum += normSamples[i] * normSamples[i];
				}
				let volume = Math.sqrt(sum / normSamples.length);
				return volume;
			}
		}

		(function main() {
			const canvas = document.getElementById("canvasSong");
			const ctx = canvas.getContext("2d");
			canvas.width = 400;
			canvas.height = 600;

			class Bar {
				constructor(x, y, width, height, color, index) {
					this.x = x;
					this.y = y;
					this.width = width;
					this.height = height;
					this.color = color;
					this.index = index;
				}
				update(micInput) {
					const sound = micInput * 200;
					if (sound > this.height) {
						this.height = sound;
					} else {
						this.height -= this.height * 0.03;
					}
				}
				draw(context, volume) {
					context.strokeStyle = this.color;
					context.save();
					context.translate(canvas.width / 2, canvas.height / 2);
					context.rotate(this.index * 0.03);
					context.scale(1 + volume * 0.5, 1 + volume * 0.2);

					context.beginPath();
					context.moveTo(this.x, this.y);
					context.lineTo(this.y, this.height);
					context.stroke();
					context.strokeRect(this.x, this.y, this.height, this.height);

					context.restore();
				}
			}
			const microphone = new Microphone();
			let bars = [];
			function createBars() {
				for (let i = 0; i < 256; i++) {
					let color = `hsl(172,59%,66%)`;
					bars.push(new Bar(0, i * 1.5, 5, 50, color, i));
				}
			}
			createBars();

			function animate() {
				if (microphone.initialized) {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					const samples = microphone.getSamples();
					const volume = microphone.getVolume();
					ctx.save();
					bars.forEach(function (bar, i) {
						bar.update(samples[i]);
						bar.draw(ctx, volume);
					});
					ctx.restore();
				}
				requestAnimationFrame(animate);
			}
			animate();
		})();
	}

	render() {
		return (
			<div className="konsol-content">
				<main>
					<div className="name">건솔</div>
					<section>
						<div className="logo">
							<img src="../assets/img/projects/konsol/logo.png" alt="logo" />
							<h1>
								<span>건솔</span> - 사운드 디자인 아티스트
							</h1>
						</div>
						<canvas id="canvasLogo"></canvas>
					</section>

					<div id="citation"></div>

					<section className="song-section">
						<canvas id="canvasSong"></canvas>
						<h2>음악</h2>

						<article className="song-article">
							<img className="cover" src="../assets/img/projects/konsol/scott-webb-S_eu4NqJt5Y-unsplash.jpg" alt="First album" />
							<div className="player">
								<div className="title">
									<h3>슬프게도 진실하다</h3>
									<p>"진심으로 슬프다"</p>
									<>
										<img className="play" id="songOneBtn" src="../assets/icons/play.svg" alt="play" />
										<br />
										<img className="pause" id="songOnePause" src="../assets/icons/pause.svg" alt="pause" />
									</>
								</div>
							</div>
						</article>

						<article className="song-article">
							<img className="cover" src="../assets/img/projects/konsol/bia-andrade-PO8Woh4YBD8-unsplash.jpg" alt="Second album" />
							<div className="player">
								<div className="title">
									<h3>그렇지 않으면 다른</h3>
									<p>"그가 될 수 있도록"</p>
									<>
										<img className="play" id="songTwoBtn" src="../assets/icons/play.svg" alt="play" />
										<br />
										<img className="pause" id="songTwoPause" src="../assets/icons/pause.svg" alt="pause" />
									</>
								</div>
							</div>
						</article>

						<article className="song-article">
							<img className="cover" src="../assets/img/projects/konsol/sharon-mccutcheon-uk-no6Yv91g-unsplash.jpg" alt="Third album" />
							<div className="player">
								<div className="title">
									<h3>자명종은 곧 울릴거야</h3>
									<p>"하지만 얼마나 오랫동안"</p>
									<>
										<img className="play" id="songThreeBtn" src="../assets/icons/play.svg" alt="play" />
										<br />
										<img className="pause" id="songThreePause" src="../assets/icons/pause.svg" alt="pause" />
									</>
								</div>
							</div>
						</article>
					</section>

					<section>
						<h2>그 사건들</h2>

						<article className="event-article">
							<h3>칸 영화제</h3>
							<img src="../assets/img/projects/konsol/danny-howe-bn-D2bCvpik-unsplash.jpg" alt="Cannes festival" />
							<p>
								칸 영화제는 매년 5월 하순 12일 동안 칸에서 열리는 국제 영화제이다. <span>주요</span> 상영은 크루아제트 산책로 입구에 위치한 팔레 데 페스티발 에서 <span>진행됩니다</span> ...
							</p>
						</article>

						<article className="event-article">
							<h3>리오 카니발</h3>
							<img src="../assets/img/projects/konsol/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg" alt="Rio festival" />
							<p>
								두르 <span>페스티벌은</span> 카를로 디 안토니오 가 조직한 대안적, 독립 및 다문화 음악의 유럽 <span>축제로</span>, 매년 여름 벨기에 몽스 근처의 두르(Dour)에서 프랑스 국경 근처의 두르 <span>풍력</span> 발전소에서 5일 동안 열립니다. 에노 ...
							</p>
						</article>

						<article className="event-article">
							<h3>롤라팔루자</h3>
							<img src="../assets/img/projects/konsol/samuel-regan-asante-3BcNKoySAq0-unsplash.jpg" alt="Lollapalooza festival" />
							<p>
								는 일리노이 주 시카고 그랜트 파크에서 <span>열리는</span> 연례 4일 음악 축제입니다. 공연에는 얼터너티브 록, 헤비 메탈, 펑크 록, <span>힙합</span> 및 전자 음악이 포함되지만 이에 국한되지 않습니다 ...
							</p>
						</article>
					</section>
				</main>

				<footer>
					<h2>연락하다</h2>
					<ul className="footer-links__social">
						<li className="social-ico">
							<img src="../assets/icons/facebook.svg" alt="facebook" />
						</li>
						<li className="social-ico">
							<img src="../assets/icons/twitter.svg" alt="twitter" />
						</li>
						<li className="social-ico">
							<img src="../assets/icons/instagram.svg" alt="instagram" />
						</li>
						<li className="social-ico">
							<img src="../assets/icons/youtube.svg" alt="youtube" />
						</li>
					</ul>
				</footer>
			</div>
			//  https://unsplash.com/photos/bn-D2bCvpik?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
			//  https://unsplash.com/photos/74kShnX5zZI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
			//  https://unsplash.com/photos/3BcNKoySAq0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

			//  https://unsplash.com/photos/PO8Woh4YBD8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
			//  https://unsplash.com/photos/uk-no6Yv91g?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
			//  https://unsplash.com/photos/S_eu4NqJt5Y?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
		);
	}
}

export default Konsol;
