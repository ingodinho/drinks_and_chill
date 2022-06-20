import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
	const { id } = useParams();
	console.log(id);
	const [details, setDetails] = useState([]);

	useEffect(() => {
		fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((response) => response.json())
			.then((json) => setDetails(json.drinks[0]));
	}, []);

	return (
		<div>
			<h1>{details.strDrink}</h1>
			<p>{details.strGlass}</p>
		</div>
	);
};

export default Details;
