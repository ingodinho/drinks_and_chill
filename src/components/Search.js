import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CaretDoubleDown, MagnifyingGlass } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

import './Search.scss';

const Search = (props) => {
	const [focus, setFocus] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const inputStyles = {
		color: !props.valid ? 'red' : 'black',
		border: focus ? '2px #6FC3DF solid' : 'none'
	}

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

	const onclickHandler = (e) => {
		console.log('test');
		console.log(e);
		navigate('/cocktails');
		props.searchHandler(e.target.textContent);

	}

	return (
		<section className='search'>
			<div className="search_flex">
				<div className="search_box">
					<MagnifyingGlass size={32} className='search_icon' />
					<input
						type='text'
						placeholder='search for your cocktail'
						onChange={onchangeHandler}
						onFocus={() => setFocus(true)}
						// onBlur={() => setFocus(false)}
						style={inputStyles}
						value={props.search}
						className='search_input'
					/>
					<AnimatePresence>
						{focus &&
							<motion.ul layout className='search_suggestions' initial={{ transform: 'translateY(0%)' }} animate={{ transform: 'translateY(9rem)' }}>
								<li value='tequila sunrise' onClick={onclickHandler}>Tequila Sunrise</li>
								<li value='cuba libre' onClick={onclickHandler}>Cuba Libre</li>
								<li value='sex on the beach' onClick={onclickHandler}>Sex on the Beach</li>
							</motion.ul>}
					</AnimatePresence>

				</div>
				<div className="search_invalid" style={{ visibility: props.valid ? 'hidden' : 'visible' }}>
					<h3>Sorry, your search seems invalid</h3>
					<p>Please check your input again.</p>
					<p>Should your designated cocktail not be in our menu, we would be happy, if you can add that to our database</p>
					<Link to={'/addcocktail'}><button className='add_cocktail_btn'>Add Cocktail</button></Link>
				</div>
			</div>
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
