import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomeList from './pages/HomeList';
import CocktailList from './pages/CocktailList';
<<<<<<< HEAD
import Header from './components/Header';
import Footer from './components/Footer';
=======
import { AnimatePresence } from 'framer-motion';
import AddCocktail from './pages/AddCocktail';
import Search from './components/Search';
import Navbar from './components/Navbar';
>>>>>>> 60c7d10c8609bc3575943901685ca4fae1502cd1

function App() {
	const [search, setSearch] = useState('');
	const [valid, setValid] = useState(true);

	const searchHandler = (e) => {
		setSearch(e);
	};

	const validHandler = (isValid) => {
		setValid(isValid);
	};

<<<<<<< HEAD
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomeList />} />
				<Route path='/cocktails' element={<CocktailList />} />
			</Routes>
=======
	const location = useLocation();

	return (
		<div className='App'>

			{location.pathname !== '/addCocktail' && (
				<Search searchHandler={searchHandler} valid={valid} />
			)}
			<AnimatePresence>
				<Routes>
					<Route path='/' element={<HomeList search={search} />} />
					<Route
						path='/cocktails'
						element={
							<CocktailList
								search={search}
								validHandler={validHandler}
							/>
						}
					/>
					<Route path='/addCocktail' element={<AddCocktail />} />
				</Routes>
			</AnimatePresence>
>>>>>>> 60c7d10c8609bc3575943901685ca4fae1502cd1
		</div>
	);
}

export default App;
