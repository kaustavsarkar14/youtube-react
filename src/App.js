import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import LinearIndeterminate from './components/LinearIndeterminate';

function App() {

  return (
    <div className='dark:bg-[#0f0f0f] dark:text-white' >
      <LinearIndeterminate/>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
