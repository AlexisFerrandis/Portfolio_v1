import React, { useEffect, useState } from "react";
// import Form from "../components/Form";
import Header from "../components/Header";
import axios from "axios";
import CardPreview from "../components/CardPreview";

const Home = () => {
	const [moviesShowsData, setMoviesShowsData] = useState([]);

	useEffect(() => {
		axios
			.get("")
			.then((res) => setMoviesShowsData(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="home-page">
			<Header />
			{/* <Form /> */}
			<div className="home-content">
				<div className="top-ten">
					<h4>Top 10 de la semaine</h4>
					<div className="preview-container">
						{moviesShowsData.slice(0, 10).map((movieShow, index) => (
							<CardPreview key={movieShow.id} infos={movieShow} rank={index + 1} />
						))}
					</div>
				</div>
				<div className="new">
					<h4>Nouveautés</h4>
					<div className="preview-container">
						{moviesShowsData.slice(10, 20).map((movieShow, index) => (
							<CardPreview key={movieShow.id} infos={movieShow} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
