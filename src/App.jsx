import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.scss";

// ---- Pages
import { Home } from "./pages";

// ---- Components
import { Loader, Navbar } from "./components";

function App() {
	const API_KEY = "ea5c3a5692af9180386440a6d3bd8c6e";
	const req = "https://api.themoviedb.org/3/trending/movie/day";

	const [loaded, setLoaded] = useState(false);
	const [movies, setMovies] = useState([]);

	function endLoader() {
		setLoaded(true);
	}

	const location = useLocation();

	useEffect(() => {
		fetch(`${req}?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then(
				(result) => {
					setMovies(result.results);
				},

				// Remarque : il est important de traiter les erreurs ici
				// au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
				// des exceptions provenant de réels bugs du composant.
				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);

		console.log("Hey");
	}, []);

	return (
		<AnimatePresence exitBeforeEnter>
			<div className='container'>
				{!loaded ? (
					<Loader pageLoadingState={endLoader} loadingTime={0.25}></Loader>
				) : (
					<>
						<Navbar></Navbar>
						<Routes location={location} key={location.pathname}>
							<Route path='/' element={<Home movies={movies} />}></Route>
						</Routes>
					</>
				)}
			</div>
		</AnimatePresence>
	);
}

export default App;
