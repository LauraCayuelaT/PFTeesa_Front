//React Router Dom:
import { Route, Routes, useLocation } from 'react-router-dom';
//Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import Detail from './Components/Detail/Detail';
import Login from './Components/Login/Login';
import Services from './views/Services/Services';
import Direccion from './views/Direccion/Direccion';
import About from './views/About/About';


function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div>
      {!isLanding && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/location' element={<Direccion/>}/>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
