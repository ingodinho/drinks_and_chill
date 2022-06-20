import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomeList from './pages/HomeList';
import CocktailList from './pages/CocktailList';

function App() {



  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeList />} />
        <Route path='/cocktails' element={<CocktailList />} />
      </Routes>


    </div>
  );
}

export default App;