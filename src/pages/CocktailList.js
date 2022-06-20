import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CocktailListItem from '../components/CocktailListItem';
import './CocktailList.scss';

const CocktailList = () => {
	const { state: link } = useLocation();
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		fetch(link)
			.then((response) => response.json())
			.then((json) => setDrinks(json.drinks));
	}, [link]);

	return (
		<div className='cocktail_list'>
			{drinks.map((el,i) => (
				<CocktailListItem 
                    className={`style${Math.floor((i % 6) + 1)} ${i % 2 === 0 ? 'left' : 'right'}`}
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
