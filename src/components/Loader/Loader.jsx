import { motion, useAnimation } from "framer-motion";
import "./Loader.scss";

const Loader = ({ pageLoadingState, loadingTime }) => {
	const loaderTitle = "kplr".split("");

	const lettersVariants = {
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: [0.2, 0.5, 0.2, 1],
			},
		},
		initial: { y: 50, opacity: 0 },
	};

	const titleVariants = {
		animate: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
				delay: 0.75,
			},
		},
		initial: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			},
		},
	};

	function endLoading() {
		setTimeout(pageLoadingState, loadingTime * 1000);
	}

	return (
		<motion.div
			className='title'
			initial='initial'
			animate='animate'
			variants={titleVariants}>
			{loaderTitle.map((letter, index) => {
				return (
					<motion.span key={index} variants={lettersVariants}>
						{letter}
					</motion.span>
				);
			})}
			<motion.span variants={lettersVariants} onAnimationComplete={endLoading}>
				.
			</motion.span>
		</motion.div>
	);
};

export default Loader;
