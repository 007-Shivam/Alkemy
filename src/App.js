import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/NavbarComponent'
import Home from './pages/Home'
import Council from './pages/Council'
import Gallery from './pages/Gallery'
import Cultural from './pages/Cultural'
import ESports from './pages/ESports'
import Special from './pages/Special'
import Sponsors from './pages/Sponsors'
import Sports from './pages/Sports'
import Technical from './pages/Technical'


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/council' element={<Council />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/cultural' element={<Cultural />} />
          <Route path='/esports' element={<ESports />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/special' element={<Special />} />
          <Route path='/technical' element={<Technical />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
