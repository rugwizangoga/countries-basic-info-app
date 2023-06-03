import { Route, Routes } from 'react-router-dom';
import Countries from './components/pages/Countries';
import Country from './components/pages/Country';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
