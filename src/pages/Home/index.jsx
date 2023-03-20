import 'bootstrap-icons/font/bootstrap-icons.css';
import { Funko } from './../../components/funko';

export const Home = () => {
  console.log('Home');

  return (
    <>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div class='input-group mb-2 w-25'>
            <input type='text' className='form-control' aria-label='Buscador' aria-describedby='Buscar' />
            <button className='btn btn-outline-secondary' type='button' id='button-addon2'><i className='bi bi-search' /></button>
          </div>
        </div>
      </div>

      {/* <-- Lado --> */}
      <aside>  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}
        <h2>Filtros</h2>
      </aside>

      {/* <-- Seccion --> */}
      <section>
        <h2>Catálogo</h2>
        <Funko />
      </section>
    </>
  );
};
export default Home;
