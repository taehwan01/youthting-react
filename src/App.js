import { Routes, Route, Navigate } from 'react-router-dom';

import DateSearch from './Pages/DateSearch/DateSearch';
import Home from './Pages/Home/Home';
import Navigation from './Shared/Navigation';

import './App.scss';
import StoreSearch from './Pages/StoreSearch/StoreSearch';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Friend from './Pages/Friend/Friend';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <hr style={{ margin: '0' }} />
      <div className='contents'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          {/* private */}
          <Route path='/friend' element={<Friend />}>
            {/* <Route path='/list' element={<></>}></Route> */}
          </Route>
          {/*  */}
          <Route path='/date-search' element={<DateSearch />}></Route>
          <Route path='/store-search' element={<StoreSearch />}></Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
