import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import OffCanvas from './component/offcanvas';
import Home from './pages/home';
import MenuList from './pages/Menu';
import OrderList from './pages/Order';
function App() {
  return (
    <Router>
      <OffCanvas/>
      <Routes>
        <Route path="/" element={<Home/>} />
    <Route path='/orders' element={<OrderList/>}/>
        <Route path='/menu' element={<MenuList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
