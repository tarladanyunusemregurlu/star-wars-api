import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePageLayout from './components/Layouts/HomePageLayout';
import StarshipDetail from './components/Starship/StarshipDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePageLayout />} />
        <Route path='/starship/:id' element={<StarshipDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
