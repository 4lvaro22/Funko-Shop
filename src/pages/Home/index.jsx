import 'bootstrap-icons/font/bootstrap-icons.css';
import { Funko } from './../../components/funko';

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
        <Funko funko={funko_prueba} />
      </section>
    </>
  );
};
export default Home;
