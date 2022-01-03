import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Desktop from "./pages/Desktop";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Desktop />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
