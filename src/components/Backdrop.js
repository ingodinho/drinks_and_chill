import './Backdrop.scss';
import { motion } from 'framer-motion';

const Backdrop = (props) => {
	return (
		<motion.div
			className='backdrop'
			onClick={props.closeModal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{props.children}
		</motion.div>
	);
};

export default Backdrop;
