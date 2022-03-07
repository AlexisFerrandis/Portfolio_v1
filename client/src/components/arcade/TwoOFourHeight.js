import React from "react";

// Img
import up from "../../assets/icons/chevron-up.svg";
import down from "../../assets/icons/chevron-down.svg";
import left from "../../assets/icons/chevron-left.svg";
import right from "../../assets/icons/chevron-right.svg";

class TwoOFourHeight extends React.Component {
	componentDidMount() {
		// Initialise grid
		const grid = {
			gridElement: document.getElementsByClassName("grid")[0],
			cells: [],
			playable: false,
			directionRoots: {
				UP: [1, 2, 3, 4],
				RIGHT: [4, 8, 12, 16],
				DOWN: [13, 14, 15, 16],
				LEFT: [1, 5, 9, 13],
			},
			init: function () {
				const cellElements = document.getElementsByClassName("cell");
				let cellIndex = 1;

				for (let cellElement of cellElements) {
					grid.cells[cellIndex] = {
						element: cellElement,
						top: cellElement.offsetTop,
						left: cellElement.offsetLeft,
						number: null,
					};

					cellIndex++;
				}

				number.spawn();
				this.playable = true;
			},

			// Add random cell & push color
			randomEmptyCellIndex: function () {
				let emptyCells = [];

				let numbers = document.querySelectorAll(".number");
				for (let i = 0; i < numbers.length; i++) {
					switch (numbers[i].innerText) {
						case "2":
							numbers[i].style.backgroundColor = "#0d47a1";
							break;
						case "4":
							numbers[i].style.backgroundColor = "#1565c0";
							break;
						case "8":
							numbers[i].style.backgroundColor = "#1976d2";
							break;
						case "16":
							numbers[i].style.backgroundColor = "#2196f3";
							break;
						case "32":
							numbers[i].style.backgroundColor = "#483983";
							break;
						case "64":
							numbers[i].style.backgroundColor = "#832A65";
							break;
						case "128":
							numbers[i].style.backgroundColor = "#265E61";
							break;
						case "256":
							numbers[i].style.backgroundColor = "#3F7421";
							break;
						case "512":
							numbers[i].style.backgroundColor = "#8624D0";
							break;
						case "1024":
							numbers[i].style.backgroundColor = "#FF00FF";
							break;
						case "2048":
							numbers[i].style.backgroundColor = "#D9BB10";
							break;
						default:
							return "yellow";
					}
				}

				for (let i = 1; i < this.cells.length; i++) {
					if (this.cells[i].number === null) {
						emptyCells.push(i);
					}
				}

				if (emptyCells.length === 0) {
					return false;
				}

				return emptyCells[Math.floor(Math.random() * emptyCells.length)];
			},
			slide: function (direction) {
				if (!this.playable) {
					return false;
				}

				this.playable = false;

				// Directions
				const roots = this.directionRoots[direction];
				let increment = direction === "RIGHT" || direction === "DOWN" ? -1 : 1;
				increment *= direction === "UP" || direction === "DOWN" ? 4 : 1;
				for (let i = 0; i < roots.length; i++) {
					const root = roots[i];
					for (let j = 1; j < 4; j++) {
						const cellIndex = root + j * increment;
						const cell = this.cells[cellIndex];

						if (cell.number !== null) {
							let moveToCell = null;
							for (let k = j - 1; k >= 0; k--) {
								const foreCellIndex = root + k * increment;
								const foreCell = this.cells[foreCellIndex];

								if (foreCell.number === null) {
									moveToCell = foreCell;
								} else if (cell.number.dataset.value === foreCell.number.dataset.value) {
									moveToCell = foreCell;
									break;
								} else {
									break;
								}
							}
							if (moveToCell !== null) {
								number.moveTo(cell, moveToCell);
							}
						}
					}
				}
				// Game over
				setTimeout(function () {
					if (number.spawn()) {
						grid.playable = true;
					} else {
						alert("GAME OVER!");
					}
				}, 500);
			},
		};

		// Spawning
		const number = {
			numbers: [],
			getElements: function () {
				const numberElements = document.getElementsByClassName("number");

				for (let numberElement of numberElements) {
					this.numbers.push(numberElement);
				}
			},
			spawn: function () {
				const emptyCellIndex = grid.randomEmptyCellIndex();

				if (emptyCellIndex === false) {
					return false;
				}

				const numberElement = document.createElement("div");
				const numberValue = 2;

				numberElement.innerText = numberValue;

				numberElement.dataset.value = numberValue;
				numberElement.classList.add("number");

				numberElement.style.top = `${grid.cells[emptyCellIndex].top}px`;
				numberElement.style.left = `${grid.cells[emptyCellIndex].left}px`;

				grid.cells[emptyCellIndex].number = numberElement;

				grid.gridElement.append(numberElement);

				return true;
			},
			// Cell direction
			moveTo: function (fromCell, toCell) {
				const number = fromCell.number;

				if (toCell.number === null) {
					number.style.top = `${toCell.top}px`;
					number.style.left = `${toCell.left}px`;

					toCell.number = number;
					fromCell.number = null;
				} else if (number.dataset.value === toCell.number.dataset.value) {
					number.style.top = `${toCell.top}px`;
					number.style.left = `${toCell.left}px`;
					number.style.opacity = "0";

					setTimeout(() => {
						grid.gridElement.removeChild(number);
					}, 500);

					const newNumberValue = toCell.number.dataset.value * 2;
					toCell.number.dataset.value = newNumberValue;
					toCell.number.innerText = newNumberValue;

					fromCell.number = null;
				}
			},
		};

		grid.init();

		// Listener
		document.addEventListener("keyup", function (e) {
			let direction = null;

			if (e.keyCode === 38) {
				direction = "UP";
			} else if (e.keyCode === 39) {
				direction = "RIGHT";
			} else if (e.keyCode === 40) {
				direction = "DOWN";
			} else if (e.keyCode === 37) {
				direction = "LEFT";
			}

			if (direction !== null) {
				grid.slide(direction);
			}

			return false;
		});

		// Arrows
		const keys = document.querySelectorAll(".key");
		for (let i = 0; i < keys.length; i++) {
			keys[i].addEventListener("click", () => {
				let direction = null;

				if (keys[i].id === "up") {
					direction = "UP";
				} else if (keys[i].id === "right") {
					direction = "RIGHT";
				} else if (keys[i].id === "down") {
					direction = "DOWN";
				} else if (keys[i].id === "left") {
					direction = "LEFT";
				}

				if (direction !== null) {
					grid.slide(direction);
				}

				return false;
			});
		}
	}

	render() {
		return (
			<div className="arcade-2048">
				<div className="wrapper">
					<div className="grid">
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
						<div className="cell"></div>
					</div>
				</div>
				<div className="controls">
					<div className="up">
						<div className="key" id="up">
							<img ref="img" src={up} alt="up" />
						</div>
					</div>
					<div className="left-down-right">
						<div className="key" id="left">
							<img ref="img" src={left} alt="left" />
						</div>
						<div className="key" id="down">
							<img ref="img" src={down} alt="down" />
						</div>
						<div className="key" id="right">
							<img ref="img" src={right} alt="right" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TwoOFourHeight;
