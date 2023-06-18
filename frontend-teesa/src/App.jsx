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
import Register from './views/Register/Register';
import Error404 from './views/Error404/Error404';
import { Carrito } from './Components/Carrito/Carrito';
import { getUserDataFromCookie } from './features/reduxReducer/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cart from './Components/Carrito/Cart';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDataFromCookie());
  }, [dispatch]);

  const hideNavbar =
    pathname === '/' || pathname === '/signup' || pathname === '/error404';

  return (
    <div>
      {/* Solucionar doble navbar */}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='home' element={<Home />} />
        <Route path='home/:id' element={<Detail />} />
        <Route path='login' element={<Login />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/signup' element={<Register />} />
        <Route path='error404' element={<Error404 />} />
        <Route path='*' element={<Navigate to='error404' />} />
        <Route path='carrito' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
