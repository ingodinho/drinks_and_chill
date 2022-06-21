import categories from '../components/categories';
import HomeListItems from '../components/HomeListItems';
<<<<<<< HEAD
import Footer from '../components/Footer';
import Header from '../components/Header';
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
>>>>>>> 60c7d10c8609bc3575943901685ca4fae1502cd1

const HomeList = () => {

<<<<<<< HEAD
	return (
		<main>
			<Header />
			<div className='home_list list_grid'>
				<input
					type='text'
					placeholder='type something'
					onChange={(event) => {
						setFilter(event.target.value);
					}}
				/>
				<Link
					to='/cocktails'
					state={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`}
				>
					<button>search</button>
				</Link>

				{categories.map((el, i) => (
					<HomeListItems
						className={`style${Math.floor((i % 6) + 1)} ${i % 2 === 0 ? 'left' : 'right'
							}`}
						key={el.id}
						name={el.name}
						desc={el.description}
						url={el.url}
						filter={filter}
					/>
				))}
			</div>
			<Footer />
		</main>
	);
=======
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
            <Link to="/addCocktail" className='addcoke'>Add Cocktail</Link>
        </motion.div>
    )
>>>>>>> 60c7d10c8609bc3575943901685ca4fae1502cd1
};


export default HomeList;
