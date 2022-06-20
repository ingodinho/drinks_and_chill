import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DetailModal = (props) => {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`
		)
			.then((response) => response.json())
			.then((json) => setDetails(json.drinks[0]));
	}, []);

	return (
		<motion.div className='modal'>
			<span onClick={props.closeModal}>X</span>
			<h1>{details.strDrink}</h1>
			<h2>Ingredients</h2>
			{/* <p>{details.strGlass}</p> */}
			<p>{details.strMeasure1} {details.strIngredient1}</p>
			<p>{details.strMeasure2} {details.strIngredient2}</p>
			<p>{details.strMeasure3} {details.strIngredient3}</p>
			<p>{details.strMeasure4} {details.strIngredient4}</p>
			<p>{details.strMeasure5} {details.strIngredient5}</p>
			<p>{details.strMeasure6} {details.strIngredient6}</p>
			<p>{details.strMeasure7} {details.strIngredient7}</p>
			<p>{details.strMeasure8} {details.strIngredient8}</p>
			<p>{details.strMeasure9} {details.strIngredient9}</p>
			<p>{details.strInstructions}</p>
		</motion.div>
	);
};

export default DetailModal;
