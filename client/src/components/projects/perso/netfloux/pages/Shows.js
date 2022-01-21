import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPreview from "../components/CardPreview";
import Header from "../components/Header";

const Shows = () => {
	const [showsData, setShowsData] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.themoviedb.org/3/trending/tv/week?api_key=69e9da0151676aa7bed1af9ac280fe63&language=fr-FR&page=2")
			.then((res) => setShowsData(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="movies-page">
			<Header />
			<div className="home-content">
				<div className="top-ten">
					<h4>Tout le monde en parle</h4>
					<div className="preview-container">
						{showsData.slice(0, 10).map((movieShow) => (
							<CardPreview key={movieShow.id} infos={movieShow} />
						))}
					</div>
				</div>
				<div className="new">
					<h4>Exclusivité</h4>
					<div className="preview-container">
						{showsData.slice(10, 20).map((movieShow) => (
							<CardPreview key={movieShow.id} infos={movieShow} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shows;
