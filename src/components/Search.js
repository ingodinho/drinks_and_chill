import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const Search = (props) => {
	const [filter, setFilter] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	console.log(navigate);
	console.log(location);
	const onchangeHandler = (e) => {
		if(location.pathname === '/cocktails') {
			props.searchHandlerCocktail(e.target.value);
		} else if (location.pathname === '/') {
			navigate('/cocktails');
			props.searchHandlerCocktail(e.target.value);
		}
	};
	return (
		<>
			<input
				type='text'
				placeholder='type something'
				onChange={onchangeHandler}
				style={{ color: !props.valid ? 'red' : 'black' }}
				value={props.value}
			/>
			<Link
				to='/cocktails'
				state={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`}
			>
				<button>search</button>
			</Link>
			{!props.valid && (
				<p style={{ color: 'black' }}>
					Eingabe hat keine neuen Treffer ergeben
				</p>
			)}
		</>
	);
};

export default Search;
