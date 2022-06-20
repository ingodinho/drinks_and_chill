import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomeList from './pages/HomeList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeList />} />
      </Routes>
    </div>
  );
}

export default App;
