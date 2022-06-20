import DetailModal from './DetailModal';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from './Backdrop';

const CocktailListItem = (props) => {
	console.log(props);
	const [isOpen, setisOpen] = useState(false);
	const closeModal = () => setisOpen(!isOpen);

	return (
		<>
			<div
				className={`cocktail_list_item style ${props.className}`}
				onClick={() => setisOpen(!isOpen)}
			>
				<img src={props.img} alt='cocktail' />
				<h3>{props.name}</h3>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div className='modal'
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						key={1}
					>
						<DetailModal id={props.id} closeModal={closeModal}/>
					</motion.div>
				)}
				{isOpen && (
					<Backdrop closeModal={closeModal} key={2}/>
				)}
			</AnimatePresence>
		</>
	);
};

export default CocktailListItem;
