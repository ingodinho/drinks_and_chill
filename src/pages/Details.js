import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
	const { id } = useParams();
	// console.log(id);
	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((response) => response.json())
			.then((json) => setDetails(json.drinks[0]));
	}, []);
	// console.log(details)
	return (
		<div>
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
		</div>
	);
};

export default Details;
