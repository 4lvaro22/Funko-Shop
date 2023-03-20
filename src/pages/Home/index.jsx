import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { funko } from './../../components/funko';

export const Home = () => {
  console.log('Home');

    console.log("Home");

    return (
        <>
        <nav className="container-fluid bg-dark">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <span className="input-group mb-2 d-flex justify-content-center">
                        <input type="text" className="form-control" aria-label="Buscador" aria-describedby="Buscar"/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                    </span>
                </div>
                <div className="col-4"></div>
            </div>
        </nav>

      {/* <-- Lado --> */}
      <aside>  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}
        <h2>Filtros</h2>
      </aside>

      {/* <-- Seccion --> */}
      <section>
        <h2>Catálogo</h2>
        <funko />
      </section>
    </>
  );
};
export default Home;
