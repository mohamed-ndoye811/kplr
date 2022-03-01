import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import "./Home.scss";

import { Image } from "../../components";

const Home = () => {
	const API_KEY = "ea5c3a5692af9180386440a6d3bd8c6e";
	const req = "https://api.themoviedb.org/3/trending/movie/day";

	const [movies, setMovies] = useState([]);

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
	}, []);

	const transition = {
		duration: 3,
		ease: [0.2, 0.5, 0.2, 1],
	};

	const imagesVariants = {
		animate: {
			...transition,
			opacity: 1,
		},
		initial: {
			opacity: 0,
		},
	};

	const gridVariants = {
		animate: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<motion.div
			className='moviesList'
			initial='initial'
			animate='animate'
			variants={gridVariants}>
			{movies.map((movie, index) => {
				console.log(typeof movie.title);
				return (
					<motion.div key={index} variants={imagesVariants}>
						<ImageBlock id='image-3' />
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export const ImageBlock = ({ id }) => {
	return (
		<div className={`image-block ${id}`}>
			<Image
				src={process.env.PUBLIC_URL + `/images/${id}.webp`}
				fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
				alt={id}
			/>
		</div>
	);
};

export default Home;
