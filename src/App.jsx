import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Contact from './routes/Contact/Contact';
import About from './routes/About/About';
import Projects from './routes/Projects/Projects';

export default function App() {
  const [isLoginPageVisible, setLoginPageVisible] = useState(true);

  const handleGetStartedClick = () => {
    setLoginPageVisible(false);
    console.log("toggling");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About handleGetStartedClick={handleGetStartedClick} isLoginPageVisible={isLoginPageVisible}/>}/>
        <Route path="/projects" element={<Projects handleGetStartedClick={handleGetStartedClick} isLoginPageVisible={isLoginPageVisible}/>}/>
        <Route path="/contact" element={<Contact handleGetStartedClick={handleGetStartedClick} isLoginPageVisible={isLoginPageVisible}/>}/>
      </Routes>
    </div>
  );
}
