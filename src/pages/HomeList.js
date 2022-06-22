import categories from '../components/categories';
import HomeListItems from '../components/HomeListItems';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.scss';

const HomeList = () => {

	return (

		<motion.div
			className='home_list'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={1}
		>
			<Navbar />
			<div className='list_grid'>
				{categories.map((el, i) => (
					<HomeListItems
						className={`style${Math.floor((i % 6) + 1)} ${i % 2 === 0 ? 'left' : 'right'
							}`}
						key={el.id}
						name={el.name}
						desc={el.description}
						url={el.url}
					/>
				))}
			</div>
			<div className="addCokeDiv">
				<Link to="/addCocktail" className='addcoke'>+ Add Your Own Cocktail</Link>
			</div>
		</motion.div>
	)
};


export default HomeList;
