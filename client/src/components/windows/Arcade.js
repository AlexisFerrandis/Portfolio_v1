import React from "react";

const Arcade = (props) => {
	return (
		<>
			<div className="content">
				<div className="arcade-illustration" onClick={() => props.floppyBird(true)}>
					<img src="./assets/img/arcade/floppy-bird/floppy.png" alt="floppy bird" />
					<p>FloppyBird</p>
				</div>
				<div className="arcade-illustration" onClick={() => props.twoOFourHeight(true)}>
					<img src="./assets/img/arcade/2048/2048.png" alt="2048" />
					<p>2048</p>
				</div>
				<div className="arcade-illustration">
					<img src="./assets/img/arcade/snake/snake.jpg" alt="snake" />
					<p>Snake</p>
				</div>
			</div>
		</>
	);
};

export default Arcade;
