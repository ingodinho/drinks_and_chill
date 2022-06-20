import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CocktailListItem from '../components/CocktailListItem';

const CocktailList = () => {
	const { state: link } = useLocation();
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		fetch(link)
			.then((response) => response.json())
			.then((json) => setDrinks(json.drinks));
	}, [link]);

	return (
		<div>
			{drinks.map((el) => (
				<CocktailListItem
					name={el.strDrink}
					key={el.idDrink}
					id={el.idDrink}
					img={el.strDrinkThumb}
				/>
			))}

		</div>
	);
};

export default CocktailList;
