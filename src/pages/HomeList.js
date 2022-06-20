import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '../components/categories';
import HomeListItems from '../components/HomeListItems';

const HomeList = () => {
    const [drinks, setDrinks] = useState([]);
    // console.log(categories);
    const [filter, setFilter] = useState("");

    return (
        <div className='home_list'>
            <input type="text" placeholder="type something" onChange={(event) => {
                setFilter(event.target.value);
            }} />
            <Link to="/cocktails" state={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`}><button>search</button></Link>

            {categories.map((el) => (
                <HomeListItems
                    key={el.id}
                    name={el.name}
                    desc={el.description}
                    url={el.url}
                    filter={filter}
                />
            ))}
        </div>
    );
};

export default HomeList;

