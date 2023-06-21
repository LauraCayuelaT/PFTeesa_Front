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
import Mercado from './Components/Mercado/Mercado';
import About from './views/About/AboutUs/AboutUs';
import AboutDevs from './views/About/AboutDevs';
import Register from './views/Register/Register';
import Error404 from './views/Error404/Error404';
import CheckoutSucess from './views/Checkout/CheckoutSucess';
import CheckoutPending from './views/Checkout/CheckoutPending';
import CheckoutFailed from './views/Checkout/CheckoutFailed';
import UserProfile from './views/UserProfile/UserProfile';
import CreateProducts from './views/Dashboard/CreateProducts';
import Dashboard from './Components/Dashboard/Dashboard';
//Redux
import { getUserDataFromCookie } from './features/reduxReducer/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cart from './Components/Carrito/Cart';
import EditProducts from './Components/Dashboard/EditProducts';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();

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
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='home'
          element={<Home />}
        />
        <Route
          path='home/:id'
          element={<Detail />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='services'
          element={<Services />}
        />
        <Route
          path='aboutdevs'
          element={<AboutDevs />}
        />
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path='contact'
          element={<Contact />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='error404'
          element={<Error404 />}
        />
        <Route
          path='mercado'
          element={<Mercado />}
        />
        <Route
          path='/profile'
          element={<UserProfile />}
        />
        <Route
          path='*'
          element={<Navigate to='error404' />}
        />
        <Route
          path='carrito'
          element={<Cart />}
        />
        <Route
          path='/admin'
          element={<Dashboard />}
        />

        <Route
          path='/dashboard/editproduct'
          element={<EditProducts />}
        />

        {/* Checkout */}
        <Route
          path='checkoutsuccess'
          element={<CheckoutSucess />}
        />
        <Route
          path='checkoutpending'
          element={<CheckoutPending />}
        />
        <Route
          path='checkoutfailed'
          element={<CheckoutFailed />}
        />
        <Route
          path='/dashboard/createproduct'
          element={<CreateProducts />}
        />
      </Routes>
    </div>
  );
}

export default App;
