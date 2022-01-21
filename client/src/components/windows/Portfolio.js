import React, { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const Portfolio = (props) => {
	const [proDisplay, setProDisplay] = useState(true);
	const [persoDisplay, setPersoDisplay] = useState(false);

	return (
		<div className="content">
			<div className="portfolio-header">
				<div
					className="tab"
					id="pro"
					onClick={(e) => {
						setPersoDisplay(false);
						setProDisplay(true);
						e.target.classList.remove("inactive");
						document.getElementById("perso").classList.add("inactive");
					}}
				>
					Pro
				</div>
				<div
					className="tab inactive"
					id="perso"
					onClick={(e) => {
						setPersoDisplay(true);
						setProDisplay(false);
						e.target.classList.remove("inactive");
						document.getElementById("pro").classList.add("inactive");
					}}
				>
					Perso
				</div>
			</div>
			{proDisplay && (
				<div className="content">
					<div className="portfolio-illustration">
						<img src="./assets/img/projects/bacchus/bacchus.jpg" alt="bacchus" />
						<p>Repaire de Bacchus</p>
					</div>
				</div>
			)}
			{persoDisplay && (
				<div className="content">
					<BrowserRouter>
						<NavLink to="/netfloux">
							<div className="portfolio-illustration" onClick={() => props.netfloux(true)}>
								<img src="./assets/img/projects/netfloux/logo-n.jpg" alt="netfloux" />
								<p>Netfloux</p>
							</div>
						</NavLink>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
};

export default Portfolio;
