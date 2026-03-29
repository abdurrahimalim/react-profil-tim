import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';                           
import ProfilAbdurrahim from './pages/ProfilAbdurrahim';
import ProfilShafa from './pages/ProfilShafa';
import ProfilAzkiya from './pages/ProfilAzkiya';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'          element={<Home />} />
        <Route path='/abdurrahim'    element={<ProfilAbdurrahim />} />
        <Route path='/shafa-kamalia' element={<ProfilShafa />} />
        <Route path='/azkiya-faza'  element={<ProfilAzkiya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
