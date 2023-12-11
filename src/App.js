import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import LinearIndeterminate from './components/LinearIndeterminate';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const isDarkMode = useSelector(state=>state.app.isDarkMode)

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark")
    }
  },[])

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
