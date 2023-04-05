import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Password from './components/register/Password';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/register' element={<Register />} />
          <Route path='/password' element={<Password />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

