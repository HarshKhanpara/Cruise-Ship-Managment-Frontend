import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import { SignUp } from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes> {/* Use Routes instead of Router */}
          <Route path="/voyager/admin" element={<SignUp />} /> {/* Use element prop */}
          <Route path="/login" element={<Login />} /> {/* Use element prop */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
