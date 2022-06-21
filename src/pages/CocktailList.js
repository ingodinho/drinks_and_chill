import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CocktailListItem from '../components/CocktailListItem';
import { Link } from 'react-router-dom';
import './CocktailList.scss';

const CocktailList = () => {
	const { state: link } = useLocation();
	const [drinks, setDrinks] = useState([]);
	const [filter, setFilter] = useState("");

	// console.log(link)
	useEffect(() => {
		fetch(link)
			.then((response) => response.json())
			.then((json) => setDrinks(json.drinks));
	}, [link]);

	// console.log(drinks)
	return (
		<div className='cocktail_list'>

			<input type="text" placeholder="type something" onChange={(event) => {
				setFilter(event.target.value);
			}} />
			<Link to="/cocktails" state={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`}><button>search</button></Link>

			{drinks.map((el, i) => (
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
