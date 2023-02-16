import './assets/App.css';
import {Home} from './pages/Home';
import {Layout} from './pages/Layout';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login";

export const BASE_PATH = "/Proyecto-Interfaces-Grupo-H";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"Login"} element={<Login/>}/>
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
