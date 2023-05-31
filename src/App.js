import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Countries from './components/pages/Countries';
import Country from './components/pages/Country';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/categories" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
