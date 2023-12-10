import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
