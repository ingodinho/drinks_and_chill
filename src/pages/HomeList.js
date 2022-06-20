import { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../components/categories';
import HomeListItems from '../components/HomeListItems';

const HomeList = () => {
    const [filter, setFilter] = useState('');

    return (
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
    );
};

export default HomeList;

<<<<<<< HEAD
=======
// const search = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin`;

// useEffect(() => {
//   fetch(search)
//     .then(response => response.json())
//     .then(json => setFilter(json))
// }, [])
>>>>>>> d9d51973480d9b997d709f5d234fd7042a7c1b53
