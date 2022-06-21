import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CocktailListItem from '../components/CocktailListItem';
import Search from '../components/Search';
import './CocktailList.scss';
import {motion} from 'framer-motion';

const CocktailList = () => {
	const { state } = useLocation();
	const [drinks, setDrinks] = useState([]);
	const [search, setSearch] = useState('');
	const [valid, setValid] = useState(true);
	let link = state;

	const searchHandler = (e) => {
        setSearch(e);
    }

	useEffect(() => {
		if (search) {
			link = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
		}
		else link = state;
		fetch(link)
			.then((response) => response.json())
			.then((json) => {
				if(json.drinks) {
					setDrinks(json.drinks);
					setValid(true);
				}
				!json.drinks && setValid(false);
			});
	}, [search]);

	// console.log(drinks)
	return (
		<motion.div 
		initial={{ opacity: 0}}
		animate={{ opacity: 1}}
		exit={{ opacity: 0}}
		key={2}
		>
			<Search 
				searchHandlerCocktail={searchHandler}
				valid={valid}
			/>
			<div className="cocktail_list">
				{drinks.map((el, i) => (
					<CocktailListItem
						className={`style${Math.floor((i % 6) + 1)} ${i % 2 === 0 ? 'item_left' : 'item_right'}`}
						name={el.strDrink}
						key={el.idDrink}
						id={el.idDrink}
						img={el.strDrinkThumb}
					/>
				))}
			</div>

		</motion.div>
	);
};

export default CocktailList;
