import { useState } from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.scss";

// ---- Pages
import { Home } from "./pages";

// ---- Components
import { Loader, Navbar } from "./components";

function App() {
	const [loaded, setLoaded] = useState(false);

	function test() {
		setLoaded(true);
		console.log("Yoo");
	}

	return (
		<>
			<AnimatePresence>
				<div className='container'>
					{!loaded ? (
						<Loader pageLoadingState={test} loadingTime={0.25}></Loader>
					) : (
						<>
							<Navbar></Navbar>
							<Routes>
								<Route path='/' element={<Home />}></Route>
							</Routes>
						</>
					)}
				</div>
			</AnimatePresence>
		</>
	);
}

export default App;
