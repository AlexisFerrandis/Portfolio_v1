import React from "react";

// Img
import floppy from "../../assets/img/arcade/floppy-bird/floppy.png";
import tofh from "../../assets/img/arcade/2048/2048.png";

const Arcade = (props) => {
	return (
		<>
			<div className="content">
				<div className="arcade-illustration" onClick={() => props.floppyBird(true)}>
					<img className="illustration-preview" src={floppy} alt="floppy bird" />
					<p>FloppyBird</p>
				</div>
				<div className="arcade-illustration" onClick={() => props.twoOFourHeight(true)}>
					<img className="illustration-preview" src={tofh} alt="2048" />
					<p>2048</p>
				</div>
				{/* <div className="arcade-illustration">
					<img className="illustration-preview" src="../assets/img/arcade/snake/snake.jpg" alt="snake" />
					<p>Snake</p>
				</div> */}
			</div>
		</>
	);
};

export default Arcade;
