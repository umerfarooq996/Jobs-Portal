import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import { JobDetail } from './pages/jobDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/job/:id" element={<JobDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
