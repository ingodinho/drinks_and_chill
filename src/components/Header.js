import './Header.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'phosphor-react';

const Header = () => {
	const [drop, setDrop] = useState(false);
	const clickHandler = () => {
		setDrop(!drop);
		document.body.classList.toggle('no-overflow');
	};

	return (
		<header className='navbarMenu'>
			<div className='head_menu_flex'>
				<Link to='/'>
					<p className='p1Nav'>DRINKS&CHILL</p>
				</Link>
				<button className='Menu' onClick={clickHandler}>
					{drop ? <X size={32} color='#fff' /> : 'MENU'}
				</button>
				<div className='burger_container' onClick={clickHandler}>
					{!drop && (
						<div className='burger_menu_flex'>
							<div className='burger'></div>
							<div className='burger'></div>
							<div className='burger'></div>
						</div>
					)}
					{drop && (
						<X size={32} color='#fff' className='burger_menu_x' />
					)}
				</div>
			</div>
			<nav className={drop ? 'nav nav_active' : 'nav'}>
				<ul>
					<li onClick={clickHandler}>
						<Link on to={'/'}>
							Home
						</Link>
					</li>
					<li onClick={clickHandler}>
						<Link to={'/addCocktail'}>Add Cocktail</Link>
					</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
			<section className='headerTextSection'>
				<Link to='/'>
					<h1 className='h1Header'>Cocktails & Drinks!</h1>
				</Link>
				<p className='pHeader'>
					WELCOME TO THE WORLD OF COCKTAILS AND DRINKS!
				</p>
			</section>
		</header>
	);
};
export default Header;
