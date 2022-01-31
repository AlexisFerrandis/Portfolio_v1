import React, { useState } from "react";
// import { BrowserRouter, NavLink } from "react-router-dom";
import InfoBubble from "./InfoBubble";

const Portfolio = (props) => {
	// Portfolio sections
	const [proDisplay, setProDisplay] = useState(true);
	const [persoDisplay, setPersoDisplay] = useState(false);

	// App
	const [bacchusInfoBubble, setBacchusInfoBubble] = useState(false);
	const [networkInfoBubble, setNetworkInfoBubble] = useState(false);
	const [konsolInfoBubble, setKonSolInfoBubble] = useState(false);
	const [portfolioInfoBubble, setPortfolioInfoBubble] = useState(false);

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
						<img className="illustration-preview" src="../assets/img/projects/bacchus/bacchus.jpg" alt="bacchus" onClick={() => setBacchusInfoBubble(!bacchusInfoBubble)} />
						<p>
							Le Repaire
							<br />
							de Bacchus
						</p>
						{bacchusInfoBubble && (
							<InfoBubble
								infos={
									<h5>
										Intégration
										<br />
										SEO
										<br />
										Animations
										<br />
										Responsive
									</h5>
								}
								github={"https://github.com/AlexisFerrandis/Bacchus-web-3.0"}
								link={"https://www.lerepairedebacchus.com/"}
							/>
						)}
					</div>
				</div>
			)}
			{persoDisplay && (
				<div className="content">
					{/* <BrowserRouter>
						<NavLink to="/netfloux">
							<div className="portfolio-illustration" onClick={() => props.netfloux(true)}>
								<img className="illustration-preview" src="../assets/img/projects/netfloux/logo-n.jpg" alt="netfloux" />
								<p>Netfloux</p>
							</div>
						</NavLink>
					</BrowserRouter> */}
					<div className="portfolio-illustration" onClick={() => props.chatbot(true)}>
						<img className="illustration-preview" src="../assets/img/projects/chatbot/chatbot.gif" alt="chatbot" />
						<p>Chatbot</p>
					</div>
					<div className="portfolio-illustration">
						<img className="illustration-preview" src="../assets/img/projects/mern/mern.jpg" alt="MERN social network" onClick={() => setNetworkInfoBubble(!networkInfoBubble)} />
						<p>Network</p>
						{networkInfoBubble && (
							<InfoBubble
								infos={
									<h5>
										React
										<br />
										Mongo
										<br />
										Express
										<br />
										Node
										<br />
										Redux
										<br />
									</h5>
								}
								github={"https://github.com/AlexisFerrandis/Social-Network-MERN"}
							/>
						)}
					</div>
					<div className="portfolio-illustration">
						<img className="illustration-preview" src="../assets/img/projects/konsol/logo.png" alt="konsol" onClick={() => setKonSolInfoBubble(!konsolInfoBubble)} />
						<p>KonSol</p>
						{/* {konsolInfoBubble && (
							<InfoBubble
								infos={
									<h5>
										Design
										<br />
										Canvas
										<br />
										Audio
									</h5>
								}
								github={"https://github.com/AlexisFerrandis/kon-sol"}
							/>
						)} */}
					</div>
					<div className="portfolio-illustration">
						<img className="illustration-preview" src="../assets/logo/af-white-logo.svg" alt="site personnel" onClick={() => setPortfolioInfoBubble(!portfolioInfoBubble)} />
						<p>Portfolio</p>
						{portfolioInfoBubble && <InfoBubble github={"https://github.com/AlexisFerrandis/AlexisFerrandis"} />}
					</div>
				</div>
			)}
		</div>
	);
};

export default Portfolio;
