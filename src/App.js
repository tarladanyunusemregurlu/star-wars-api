import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarshipDetail from './components/StarshipDetail';
import Layout from './components/Layouts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
      </Routes>
    </Router>
  );
}

export default App;