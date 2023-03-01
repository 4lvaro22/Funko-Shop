import {Home} from './pages/Home';
import {Layout} from './pages/Layout';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {Funko} from "./components/Funko";
import './assets/styles/App.css'

export const BASE_PATH = "/Proyecto-Interfaces-Grupo-H";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"Login"} element={<Login/>}/>
                    <Route path={"SignUp"} element={<SignUp/>}/>
                    <Route path={"Funko"} element={<Funko name="prueba" price="7.00" image="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg"/>}/>
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
