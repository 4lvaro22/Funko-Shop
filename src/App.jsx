import {Home} from './pages/Home';
import {Layout} from './pages/Layout';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {AboutUs} from "./pages/AboutUs";
import {TermsAndConditions} from './pages/TermsAndConditions';
import {SignUp} from "./pages/SignUp";
import {Funko} from "./pages/FunkoInfo";
import { Cart } from './pages/Cart';
import './assets/styles/App.css';
import {Profile} from "./pages/Profile";
import './assets/styles/App.css'
import { PaymentSection } from './pages/Profile/Payments';

export const BASE_PATH = "/Proyecto-Interfaces-Grupo-H";

const testUser = {
    name: "Test User",
    surname: "apellido",
    img: "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
    email: "test@gmail.com",
    card: {
        number: "1234 5678 9012 3456",
        exp: "12/24",
        cvv: "123"
    }
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"Login"} element={<Login/>}/>
                    <Route path={"Home"} element={<Home/>}/>
                    <Route path={"AboutUs"} element={<AboutUs/>}/>
                    <Route path={"Terms"} element={<TermsAndConditions/>}/>
                    <Route path={"SignUp"} element={<SignUp/>}/>
                    <Route path={"Funko"} element={<Funko name="Funko HarryPotter" price="7.00" image="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg"/>}/>
                    <Route path={"Cart"} element={<Cart/>}/>
                    <Route path={"Profile"} element={<Profile user={testUser} />}/>
                    <Route path="*" element={<h1>404: Not Found</h1>}/>
                    {/*<Route path="*">*/}
                    {/*    <Redirect to="/Proyecto-Interfaces-Grupo-H"/>*/}
                    {/*</Route>*/}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
