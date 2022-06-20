import {useState} from 'react';
import {Link} from 'react-router-dom';

const Search = (props) => {

    const [filter, setFilter] = useState('');

	return (
		<>
			<input
				type='text'
				placeholder='type something'
				onChange={props.searchHandler}
                style={{color: !props.valid ? 'red' : 'black'}}
			/>
			<Link
				to='/cocktails'
				state={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`}
			>
				<button>search</button>
			</Link>
            {!props.valid && <p style={{color: 'black'}}>Eingabe hat keine neuen Treffer ergeben</p>}
		</>
	);
};

export default Search;
