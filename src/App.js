import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomeList from './pages/HomeList';
import CocktailList from './pages/CocktailList';
import {motion, AnimatePresence} from 'framer-motion';

function App() {



  return (
    <div className='App'>
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<HomeList />} />
          <Route path='/cocktails' element={<CocktailList />} />
        </Routes>
      </AnimatePresence>


    </div>
  );
}

export default App;