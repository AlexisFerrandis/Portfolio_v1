import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const Netfloux = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/netfloux" element={<Home />} />
				<Route path="/netfloux/list" element={<UserList />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Netfloux;
