import React from 'react';
import HomePage from './components/HomePage';
import SchedulePage from './components/SchedulePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
