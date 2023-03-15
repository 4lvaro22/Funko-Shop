import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom";
import {funko} from "./../../components/funko"

export const Home = () => {

    console.log("Home");

    return (
        <>
        <div className="input-group rounded w-25">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <i className="bi bi-search"></i>
        <span className="input-group-text border-0" id="search-addon">
        </span>
        </div>

        {/*<-- Lado -->*/}
        <aside>  {/*<-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... -->*/}
            <h2>Filtros</h2>
        </aside>

        {/*<-- Seccion -->*/}
        <section>
            <h2>Catálogo</h2>
            <funko/>
        </section>
        </>
    );
}
export default Home;