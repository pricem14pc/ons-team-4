import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Questionnaires from './pages/Questionnaires';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/questionnaires">Questionnaires</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questionnaires" element={<Questionnaires />} />
      </Routes>
    </div>
  );
}

export default App;
