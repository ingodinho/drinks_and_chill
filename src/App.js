import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomeList from './pages/HomeList';
import CocktailList from './pages/CocktailList';
import Details from './pages/Details';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomeList />} />
				<Route path='/cocktails' element={<CocktailList />} />
				<Route path='/cocktails/:id' element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;