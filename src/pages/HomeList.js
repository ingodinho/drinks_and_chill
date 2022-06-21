import categories from '../components/categories';
import HomeListItems from '../components/HomeListItems';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeList = () => {

    return (
        <motion.div
            className='home_list'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={1}
        >
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
};


export default HomeList;
