import { useState, useEffect } from 'react';
import categories from '../components/categories';
import HomeListItems from '../components/HomeListItems';

const HomeList = () => {
	const [drinks, setDrinks] = useState([]);
	console.log(categories);

	return (
		<div className='home_list'>
			{categories.map((el) => (
				<HomeListItems
					key={el.id}
					name={el.name}
					desc={el.description}
					url={el.url}
				/>
			))}
		</div>
	);
};

export default HomeList;
