import './assets/App.css';
import {Home} from './pages/Home';
import {Layout} from './pages/Layout';
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const BASE_PATH = "/Proyecto-Interfaces-Grupo-H";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path={BASE_PATH}>
                        <Route index element={<Home/>}/>
                        <Route path="*" element={<h1>404: Not Found</h1>}/>
                    </Route>

                    <Route path="*" element={<h1>404: Not Found</h1>}/>
                    {/*<Route path="*">*/}
                    {/*    <Redirect to="/Proyecto-Interfaces-Grupo-H"/>*/}
                    {/*</Route>*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
