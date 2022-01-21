import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import UserList from "./pages/UserList";

const Netfloux = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/netfloux" element={<Home />} />
				<Route path="/netfloux/list" element={<UserList />} />
				<Route path="/netfloux/movies" element={<Movies />} />
				<Route path="/netfloux/shows" element={<Shows />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Netfloux;
