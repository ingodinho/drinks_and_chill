import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CaretDoubleDown, MagnifyingGlass } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

import './Search.scss';

const Search = (props) => {
	const [focus, setFocus] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const [input, setInput] = useState('');

	const inputStyles = {
		color: !props.valid ? 'red' : 'black',
		border: focus ? '2px #6FC3DF solid' : 'none',
	};

	const onchangeHandler = (e) => {
		if (e.target.value === '') {
			setInput('');
			navigate('/');
			return;
		}
		if (location.pathname === '/cocktails') {
			props.searchHandler(e.target.value);
		} else if (location.pathname === '/') {
			navigate('/cocktails');
			props.searchHandler(e.target.value);
		}
		setInput(e.target.value);
	};

	const onclickHandler = (e) => {
		navigate('/cocktails');
		props.searchHandler(e.target.textContent);
<<<<<<< HEAD

	}

	return (
		<section className='search'>
			<div className="search_flex">
				<div className="search_box">
=======
		// setInput(e.target.textContent);
	};

	const animatedLi = {
		initial: { opacity: 0},
		animate: { opacity: 1},
		exit: { opacity: 0},
	};

	return (
		<section className='search'>
			<div className='search_flex'>
				<div className='search_box'>
>>>>>>> f9acd32c9bc1d4f99f90145d670df0245f33549d
					<MagnifyingGlass size={32} className='search_icon' />
					<input
						type='text'
						placeholder='search for your cocktail'
						onChange={onchangeHandler}
						onFocus={() => setFocus(true)}
<<<<<<< HEAD
						// onBlur={() => setFocus(false)}
=======
						onBlur={() => setFocus(false)}
>>>>>>> f9acd32c9bc1d4f99f90145d670df0245f33549d
						style={inputStyles}
						value={input}
						className='search_input'
					/>
					<AnimatePresence>
<<<<<<< HEAD
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
=======
						{focus && !input && (
							<motion.ul
								className='search_suggestions'
								initial={{
									transform: 'translateY(0rem)',
									opacity: 0,
								}}
								animate={{
									transform: 'translateY(3rem)',
									opacity: 1,
								}}
								exit={{
									transform: 'translateY(0rem)',
									opacity: 0,
								}}
							>
								<motion.li
									initial={animatedLi.initial}
									animate={animatedLi.animate}
									exit={animatedLi.exit}
									onClick={onclickHandler}
								>
									Sunrise
								</motion.li>
								<motion.li
									initial={animatedLi.initial}
									animate={animatedLi.animate}
									exit={animatedLi.exit}
									onClick={onclickHandler}
								>
									Cuba Libre
								</motion.li>
								<motion.li
									initial={animatedLi.initial}
									animate={animatedLi.animate}
									exit={animatedLi.exit}
									onClick={onclickHandler}
								>
									Sex
								</motion.li>
							</motion.ul>
						)}
					</AnimatePresence>
				</div>
				<div
					className='search_invalid'
					style={{ visibility: props.valid ? 'hidden' : 'visible' }}
				>
					<h3>Sorry, your search seems invalid</h3>
					<p>Please check your input again.</p>
					<p>
						Should your designated cocktail not be in our menu, we
						would be happy, if you can add that to our database
					</p>
					<Link to={'/addcocktail'}>
						<button className='add_cocktail_btn'>
							Add Cocktail
						</button>
					</Link>
				</div>
>>>>>>> f9acd32c9bc1d4f99f90145d670df0245f33549d
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
