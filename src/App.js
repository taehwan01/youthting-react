import { Routes, Route, Navigate } from 'react-router-dom';

import DateSearch from './Pages/DateSearch/DateSearch';
import Home from './Pages/Home/Home';
import Navigation from './Shared/Navigation';

import './App.scss';
import StoreSearch from './Pages/StoreSearch/StoreSearch';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr />
      <div className='contents'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Home />}></Route>
          <Route path='/date-search' element={<DateSearch />}></Route>
          <Route path='/store-search' element={<StoreSearch />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
