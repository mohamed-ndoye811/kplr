import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.scss";

import { Image } from "../../components";

const Home = ({ movies }) => {
	const transition = {
		duration: 1.2,
		ease: [0.2, 0.5, 0.2, 1],
	};

	const imagesVariants = {
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				...transition,
			},
		},
		initial: {
			opacity: 0,
			y: 50,
		},
		exit: {
			opacity: 0,
			y: 50,
		},
	};

	const gridVariants = {
		animate: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.05,
				delay: 1,
			},
		},
		exit: { opacity: 0, transition: { ...transition } },
	};

	return (
		<motion.div
			className='moviesList'
			initial='initial'
			animate='animate'
			exit='exit'
			variants={gridVariants}>
			{movies.map((movie, index) => {
				return (
					<motion.span key={index} variants={imagesVariants}>
						<img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
					</motion.span>
				);
			})}
		</motion.div>
	);
};

export const ImageBlock = ({ url, id, variants }) => {
	return (
		<motion.div className={`image-block ${id}`} variants={variants}>
			<Image src={url} alt={id} />
		</motion.div>
	);
};

export default Home;
