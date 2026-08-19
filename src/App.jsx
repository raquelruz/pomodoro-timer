import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Timer } from "./pages/Timer";
import { Navbar } from "./components/Navigation/Navbar";
import { Route, Routes } from "react-router-dom";

export const App = () => {
	return (
		<div className="min-h-screen bg-bg-secondary">
			<div className="px-6 py-6">
				<Header />
			</div>

			<div className="px-4 sm:py-10">
				<Routes> 
					<Route path="/" element={<Timer />} />
				</Routes>
			</div>

			<div>
				<Navbar />
			</div>
		</div>
	);
};
