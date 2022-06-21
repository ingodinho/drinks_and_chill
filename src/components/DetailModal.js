import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DetailModal.scss';
import {X} from 'phosphor-react';

const DetailModal = (props) => {
	const [details, setDetails] = useState([]);
	console.log(details);

	useEffect(() => {
		fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`
		)
			.then((response) => response.json())
			.then((json) => setDetails(json.drinks[0]));
	}, [props.id]);

	// const modalAnimation = {
	// 	hidden: {
	// 		opacity: 0
	// 	},
	// 	visible: {
	// 		opacity: 1
	// 	},
	// 	exit: {
	// 		opacity: 0
	// 	}
	// }

	return (
			<motion.div
				onClick={e => e.stopPropagation()}
				className='modal_flex'
				>
				<div className='modal_x'>
					<span onClick={props.closeModal}><X size={32} color="#fff"/></span>
				</div>
				<div className='modal_grid'>
					<div className="modal_grid_img_div"><img src={details.strDrinkThumb} alt='' className='modal_grid_img'/></div>
					<article className='modal_article'>
						<h1>{details.strDrink}</h1>
						<h2>Ingredients</h2>
						{/* <p>{details.strGlass}</p> */}
						<p>
							{details.strMeasure1} {details.strIngredient1}
						</p>
						<p>
							{details.strMeasure2} {details.strIngredient2}
						</p>
						<p>
							{details.strMeasure3} {details.strIngredient3}
						</p>
						<p>
							{details.strMeasure4} {details.strIngredient4}
						</p>
						<p>
							{details.strMeasure5} {details.strIngredient5}
						</p>
						<p>
							{details.strMeasure6} {details.strIngredient6}
						</p>
						<p>
							{details.strMeasure7} {details.strIngredient7}
						</p>
						<p>
							{details.strMeasure8} {details.strIngredient8}
						</p>
						<p>
							{details.strMeasure9} {details.strIngredient9}
						</p>
						<p className='modal_article_description'>{details.strInstructions}</p>
					</article>
				</div>
			</motion.div>
	);
};

export default DetailModal;
