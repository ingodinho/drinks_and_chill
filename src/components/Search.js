import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CaretDoubleDown, MagnifyingGlass, Heart } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

import './Search.scss';

const Search = ({value, searchHandler, valid, validHandler}) => {
	const [focus, setFocus] = useState(false);
	const [input, setInput] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	const chooseBorder = () => {
		if (focus && valid) return '2px #6FC3DF solid';
		else if (focus && !valid) return '4px #e03131 solid';
		else return 'none';
	};

	useEffect(() => {
		setInput(value);
		validHandler(true);
	},[value])

	const inputStyles = {
		color: !valid ? '#e03131' : 'black',
		border: chooseBorder(),
		transition: 'all 100ms linear',
	};

	const onchangeHandler = (e) => {
		if (e.target.value === '') {
			setInput('');
			navigate('/');
			return;
		}
		if (location.pathname === '/cocktails') {
			searchHandler(e.target.value);
		} else if (location.pathname === '/') {
			navigate('/cocktails');
			searchHandler(e.target.value);
		}
		setInput(e.target.value);
	};

	const onclickHandler = (e) => {
		navigate('/cocktails');
		searchHandler(e.target.textContent);
	};

	const animatedLi = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<section className='search'>
			<div className='search_flex'>
				<div className='search_box'>
					<MagnifyingGlass size={32} className='search_icon' />
					<input
						type='text'
						placeholder='search for your cocktail'
						onChange={onchangeHandler}
						onFocus={() => setFocus(true)}
						onBlur={() => setTimeout(() => setFocus(false), 200)}
						style={inputStyles}
						value={input}
						className='search_input'
					/>
					<AnimatePresence>
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
					style={{ display: valid ? 'none' : 'block' }}
				>
					<h3>Sorry, your search seems invalid</h3>
					<p>Please check your input again.</p>
					<p>
						Should your designated cocktail not be in our database,
						we would be happy, if you can help us add it!{' '}
						<Heart
							size={24}
							color='#e03131'
							weight='fill'
							style={{ verticalAlign: 'middle' }}
						/>
					</p>
					<Link to={'/addcocktail'}>
						<button
							className='add_cocktail_btn'
							onClick={() => validHandler(true)}
						>
							Add Cocktail
						</button>
					</Link>
				</div>
			</div >
			<div className='caret_double'>
				<CaretDoubleDown
					size={32}
					color='#fff'
					className='caret_double_icon'
				/>
			</div>
		</section >
	);
};

export default Search;
