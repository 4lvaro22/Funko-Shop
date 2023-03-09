import {Home} from './pages/Home';
import {Layout} from './pages/Layout';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";
import {Profile} from "./pages/Profile";

import './assets/styles/App.css'

export const BASE_PATH = "/Proyecto-Interfaces-Grupo-H";

const testUser = {
    name: "Test User",
    img: "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",

}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"Login"} element={<Login/>}/>
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
