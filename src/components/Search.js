import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { CaretDoubleDown } from 'phosphor-react';
import './Search.scss';

const Search = (props) => {
	const [filter, setFilter] = useState('');
	console.log(props.valid);
	const location = useLocation();
	const navigate = useNavigate();
	const onchangeHandler = (e) => {
		if (e.target.value === '') {
			navigate('/');
			return;
		}
		if (location.pathname === '/cocktails') {
			props.searchHandler(e.target.value);
		} else if (location.pathname === '/') {
			navigate('/cocktails');
			props.searchHandler(e.target.value);
		}
	};
	return (
		<section className='search'>
			<input
				type='text'
				placeholder='type something'
				onChange={onchangeHandler}
				style={{ color: !props.valid ? 'red' : 'black' }}
				value={props.value}
				className='input_feld'
			/>
			<Link
				to='/cocktails'
				state={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`}
			>
				<button className='search_button'>search</button>
			</Link>
			{!props.valid && (
				<p style={{ color: 'black' }}>
					Eingabe hat keine neuen Treffer ergeben
				</p>
			)}
			<div className='caret_double'>
				<CaretDoubleDown
					size={32}
					color='#fff'
					className='caret_double_icon'
				/>
			</div>
		</section>
	);
};

export default Search;
