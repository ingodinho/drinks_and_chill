import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CocktailListItem from '../components/CocktailListItem';
import './CocktailList.scss';
import { motion } from 'framer-motion';

const CocktailList = (props) => {
	const { state } = useLocation();
	const [drinks, setDrinks] = useState([]);
	const [link, setLink] = useState(state)
	// let link = state;

	useEffect(() => {
		if (props.search) {
			setLink(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.search}`);
		}
		else setLink(state);
		fetch(link)
			.then((response) => response.json())
			.then((json) => {
				if (json.drinks) {
					setDrinks(json.drinks);
					props.validHandler(true);
				}
				!json.drinks && props.validHandler(false);
			});
	}, [props.search]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={2}
		>
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
