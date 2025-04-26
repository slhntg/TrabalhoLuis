import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Tailwind from "./pages/Tailwind/Tailwind";
import Styled from "./pages/Styled/Styled";
import Home from "./pages/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" index element={<Home />} />
				<Route path="/Tailwind/:username" index element={<Tailwind />} />
				<Route path="/Styled/:username" index element={<Styled />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
