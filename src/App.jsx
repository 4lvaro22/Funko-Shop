import {Home} from './pages/Home';
import {Layout} from './pages/Layout';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {AboutUs} from "./pages/AboutUs";
import {TermsAndConditions} from './pages/TermsAndConditions';
import {SignUp} from "./pages/SignUp";
import './assets/styles/App.css'

export const BASE_PATH = "/Proyecto-Interfaces-Grupo-H";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"Login"} element={<Login/>}/>
                    <Route path={"AboutUs"} element={<AboutUs/>}/>
                    <Route path={"Terms"} element={<TermsAndConditions/>}/>
                    <Route path={"SignUp"} element={<SignUp/>}/>
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
