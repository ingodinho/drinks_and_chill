import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HomeList from './pages/HomeList';
import Search from './components/Search';
import Footer from './components/Footer';
import CocktailList from './pages/CocktailList';
import AddCocktail from './pages/AddCocktail';
import Navbar from './components/Navbar';

function App() {
	const [search, setSearch] = useState('');
	const [valid, setValid] = useState(true);

	const searchHandler = (e) => {
		setSearch(e);
	};

	const validHandler = (isValid) => {
		setValid(() => isValid);
	};

	const location = useLocation();

	return (
		<div className='App'>
			<Navbar />
			{location.pathname !== '/addcocktail' && (
				<Search searchHandler={searchHandler} valid={valid} value={search} validHandler={validHandler}/>
			)}
			<AnimatePresence>
				<Routes>
					<Route path='/' element={<HomeList search={search} searchHandler={searchHandler}/>} />
					<Route
						path='/cocktails'
						element={
							<CocktailList
								search={search}
								validHandler={validHandler}
							/>
						}
					/>
					<Route path='/addcocktail' element={<AddCocktail />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
