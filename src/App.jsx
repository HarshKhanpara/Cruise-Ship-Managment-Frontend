import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/voyager" element={<Login />} />
          <Route path="/manager" element={<Login />} />
          <Route path="/supervisor" element={<Login />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/headcook" element={<Login />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
