import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomeList from './pages/HomeList';
import CocktailList from './pages/CocktailList';
import { AnimatePresence } from 'framer-motion';
import AddCocktail from './pages/AddCocktail';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
	const [search, setSearch] = useState('');
	const [valid, setValid] = useState(true);

	const searchHandler = (e) => {
		setSearch(e);
	};

	const validHandler = (isValid) => {
		setValid(isValid);
	};

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
		</div>
	);
}

export default App;
