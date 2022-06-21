import DetailModal from './DetailModal';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from './Backdrop';

const CocktailListItem = (props) => {
	const [isOpen, setisOpen] = useState(false);
	const closeModal = () => setisOpen(!isOpen);

	const modal = {
		hidden: {
			// y: '-50%',
			// x: '-50%',
			opacity: 0,
		},
		visible: {
			// y: '-50%',
			// x: '-50%',
			opacity: 1,
			// transition: {delay: 0.5}
		}
	}

	return (
		<>
			<motion.div
				className={`cocktail_list_item style ${props.className}`}
				onClick={() => setisOpen(!isOpen)}
			>
				<img src={props.img} alt='cocktail' />
				<h3>{props.name}</h3>
			</motion.div>
			<AnimatePresence exitBeforeEnter>
				{isOpen && (
					<motion.div
						className='detail_modal'
						variants={modal}
						initial='hidden'
						animate='visible'
						key={1}
					>
						<DetailModal id={props.id} closeModal={closeModal} />
					</motion.div>
				)}
				{isOpen && <Backdrop closeModal={closeModal} key={2} />}
				{/* {isOpen && <DetailModal id={props.id} closeModal={closeModal}/>} */}
			</AnimatePresence>
		</>
	);
};

export default CocktailListItem;
