import {useState} from 'react';
import {Link} from 'react-router-dom';

const Search = () => {

    const [filter, setFilter] = useState('');
    
	return (
		<>
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
		</>
	);
};

export default Search;
