import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './routes/Contact/Contact';
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import Closet from './routes/Closet/Closet';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/closet" element={<Closet/>}/>
      </Routes>
    </div>
  );
}
