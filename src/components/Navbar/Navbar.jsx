import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
	const loaderTitle = "kplr".split("");

	const titleVariants = {
		animate: {
			top: 30,
			fontSize: "24px",
			margin: "0 auto",
			transition: {
				duration: 1.2,
				ease: [0.7, 0.0, 0.1, 1],
			},
		},
		initial: {},
	};

	return (
		<motion.div
			className='homeButton'
			initial='initial'
			animate='animate'
			variants={titleVariants}>
			{loaderTitle.map((letter, index) => {
				return <motion.span key={index}>{letter}</motion.span>;
			})}
			<motion.span>.</motion.span>
		</motion.div>
	);
};

export default Navbar;
