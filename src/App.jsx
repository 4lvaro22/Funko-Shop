import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { AboutUs } from './pages/AboutUs';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { SignUp } from './pages/SignUp';
import { FunkoInfo } from './pages/FunkoInfo';
import { Cart } from './pages/Cart';
import { Faq } from './pages/Faq';
import './assets/styles/App.css';
import { Profile } from './pages/Profile';
import Contact from './pages/Contact';
import ScrollTop from './components/ScrollTop';

export const BASE_PATH = '/Proyecto-Interfaces-Grupo-H';

function App () {
  return (
    <Router>
      <ScrollTop />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home itemsPerPage={15} />} />
          <Route path='Login' element={<Login />} />
          <Route path='Home' element={<Home itemsPerPage={15} />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='Faq' element={<Faq />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Funko/:id' element={<FunkoInfo />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='*' element={<main className='my-auto pb-4'><h1 className='text-center m-auto'> 404: Not Found</h1></main>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
