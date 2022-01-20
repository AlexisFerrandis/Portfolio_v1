import React from "react";

const CardPreview = ({ infos, rank }) => {
	return (
		<div className="card-preview">
			<span>{rank}</span>
			<img src={`https://image.tmdb.org/t/p/w500${infos.poster_path}`} alt="movie poster" />
		</div>
	);
};

export default CardPreview;
