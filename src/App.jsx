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
import { useStorage } from './hooks/useStorage';
import { useRef } from 'react';

export const BASE_PATH = '/Proyecto-Interfaces-Grupo-H';

const testUser = {
  name: 'Test User',
  surname: 'apellido',
  img: 'https://cdn-icons-png.flaticon.com/512/17/17004.png',
  email: 'test@gmail.com',
  password: '1234',
  card: {
    number: '1234567890123456',
    exp: '12/24',
    cvv: '123'
  }
};

function App () {
  const [session, setSession] = useStorage({ key: 'session', def: false });

  return (
    <Router>
      <ScrollTop />

      <Routes>
        <Route path='/' element={<Layout session={session} setSession={setSession} />}>
          <Route index element={<Home itemsPerPage={15} session={session} />} />
          <Route path='Login' element={<Login setSession={setSession} session={session} />} />
          <Route path='Home' element={<Home itemsPerPage={15} session={session} />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='Faq' element={<Faq />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Funko/:id' element={<FunkoInfo session={session} />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='Profile' element={<Profile user={testUser} session={session} setSession={setSession} />} />
          <Route path='*' element={<main className='my-auto pb-4'><h1 className='text-center m-auto'> 404: Not Found</h1></main>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
