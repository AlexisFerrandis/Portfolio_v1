import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPreview from "../components/CardPreview";
import Header from "../components/Header";

const Movies = () => {
	const [moviesData, setMoviesData] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.themoviedb.org/3/trending/movie/week?api_key=&language=fr-FR&page=2")
			.then((res) => setMoviesData(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="movies-page">
			<Header />
			<div className="home-content">
				<div className="top-ten">
					<h4>Tendances</h4>
					<div className="preview-container">
						{moviesData.slice(0, 10).map((movieShow) => (
							<CardPreview key={movieShow.id} infos={movieShow} />
						))}
					</div>
				</div>
				<div className="new">
					<h4>Voir et revoir</h4>
					<div className="preview-container">
						{moviesData.slice(10, 20).map((movieShow) => (
							<CardPreview key={movieShow.id} infos={movieShow} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movies;
