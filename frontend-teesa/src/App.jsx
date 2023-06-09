//React Router Dom:
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
//Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import Detail from './Components/Detail/Detail';
import Login from './Components/Login/Login';
import Services from './views/Services/Services';
import Contact from './Components/Contact/Contact';
import About from './views/About/About';
import Pagination from './Components/Pagination/Pagination';
import HomePrueba from './Components/Prueba/HomePrueba';

function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div>
      {!isLanding && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='home' element={<Home />} />
        <Route path='home/:id' element={<Detail />} />
        <Route path='login' element={<Login />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='pagination' element={<Pagination />} />
        <Route path='homeprueba' element={<HomePrueba />} />
        <Route path='*' element={<Navigate to='home' />} />
      </Routes>
    </div>
  );
}

export default App;
