import categories from '../components/categories';
import {useState, useEffect} from 'react';
import HomeListItems from '../components/HomeListItems';
import Search from '../components/Search'

const HomeList = () => {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    useEffect( () => {
        if(search) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then(response => response.json())
            .then(json => setList(json.drinks))
        } else {
            setList(categories);
        }
    } ,[search])
    console.log(search);
    console.log(list);

	return (
		<div className='home_list'>
            <Search
                searchHandler={searchHandler}
            /> 
			<div className="list_grid">
                {!search && (list.map((el,i) => (
                    <HomeListItems
                        className={`style${Math.floor((i % 6) + 1)} ${
                            i % 2 === 0 ? 'left' : 'right'
                        }`}
                        key={el.id}
                        name={el.name}
                        desc={el.description}
                        url={el.url}
                    />
                )))}                
            </div>
		</div>
	);
};

export default HomeList;