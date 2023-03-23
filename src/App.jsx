import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { HashRouter as Router, Route, Routes, ScrollRestoration } from 'react-router-dom';
import { Login } from './pages/Login';
import { AboutUs } from './pages/AboutUs';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { SignUp } from './pages/SignUp';
import { FunkoInfo } from './pages/FunkoInfo';
import { Cart } from './pages/Cart';
import { Faq } from './pages/Faq';
import './assets/styles/App.css';
import { Profile } from './pages/Profile';
import { PaymentSection } from './pages/Profile/Payments';
import Contact from './pages/Contact';

export const BASE_PATH = '/Proyecto-Interfaces-Grupo-H';

const testUser = {
  name: 'Test User',
  surname: 'apellido',
  img: 'https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg',
  email: 'test@gmail.com',
  card: {
    number: '1234 5678 9012 3456',
    exp: '12/24',
    cvv: '123'
  }
};

const funko_prueba = {
  handle: 'rhaenyra-targaryen',
  title: 'Rhaenyra Targaryen',
  imageName: 'https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1324888/Rhaenyra_Targaryen_Vinyl_Art_Toys_4fb7ebdb-25d5-4aaa-9071-633c0513cdb2.png',
  series: [
    'Pop! Vinyl',
    'Pop! Digital'
  ],
  scale: '3.75',
  released: {
    month: 'Feb',
    year: '2023'
  },
  price: '85',
  rating: '3.00'
};

function App () {
  return (
    <Router>
      {/* <ScrollRestoration /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Login' element={<Login />} />
          <Route path='Home' element={<Home />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='Faq' element={<Faq />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Funko/:id' element={<FunkoInfo />} />
          <Route path='Cart' element={<Cart funko={funko_prueba} />} />
          <Route path='Profile' element={<Profile user={testUser} />} />
          <Route path='*' element={<h1>404: Not Found</h1>} />
          {/* <Route path="*"> */}
          {/*    <Redirect to="/Proyecto-Interfaces-Grupo-H"/> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
