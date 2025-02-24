import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/NavbarComponent';
import Home from './pages/Home'
import About from './pages/About'
import Admission from './pages/Admission'
import Facilities from './pages/Facilities'
import Teacher from './pages/Teacher'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
