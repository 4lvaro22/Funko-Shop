import 'bootstrap-icons/font/bootstrap-icons.css';
import AddedModal from '../../components/addedModal';

export const Contact = () => {
  return (
    <>
      <div className='container m-4'>
        <AddedModal alert='Se ha enviado su colicitud correctamente' out='Salir' />
        <h1><strong>Contacta con nosotros</strong></h1>
        <p>Si tienes cualquier duda sobre tu compra o consulta sobre nuestras tiendas, puedes contactar con nosotros como prefieras:</p>
        <p>Puedes enviarnos tu consulta a través de este formulario:</p>
        <p>Los campos marcados con un asterisco (<span style={{ color: 'red' }}>*</span>) son obligatorios</p>

        <div className='m-3 col-4'>
          <fieldset>
            <div className='m-3 row'>
              <label>Nombre <span style={{ color: 'red' }}>*</span></label>
              <label><input id='nombre' type='text' /></label>
            </div>

            <div className='m-3 row'>
              <label>Apellidos <span style={{ color: 'red' }}>*</span></label>
              <label><input id='nombre' type='text' /></label>
            </div>

            <div className='m-3 row'>
              <label>Número de teléfono</label>
              <label><input id='nombre' type='text' /></label>
            </div>

            <div className='m-3 row'>
              <label>Correo electrónico <span style={{ color: 'red' }}>*</span></label>
              <label><input id='nombre' type='text' /></label>
            </div>

            <div className='m-3 row'>
              <label>Introduce de nuevo tu correo electrónico <span style={{ color: 'red' }}>*</span></label>
              <label><input id='nombre' type='text' /></label>
            </div>

            <div className='m-3 row'>
              <label>Número de pedido</label>
              <label><input id='nombre' type='text' /></label>
            </div>

            <div className='m-3 row'>
              <label>Tema de la consulta <span style={{ color: 'red' }}>*</span></label>
              <select className='mx-2 p-2 w-75'>
                <option selected='true'>Selecciona una categoría</option>
                <option>Información y compras</option>
                <option>Proceso de cobro</option>
                <option>Pedidos</option>
                <option>Devoluciones</option>
                <option>Servicio</option>
                <option>Tratamiento de datos personales</option>
                <option>Otros</option>
              </select>
            </div>

            <div className='m-3 row'>
              <label>Consulta <span style={{ color: 'red' }}>*</span></label>
              <label><textarea id='consulta' /></label>
            </div>

            <div className='m-3'>
              <label className='mx-3'>Anexar Documentos</label><button className='mx-3 btn btn-secondary'>Adjuntar documentos</button>
            </div>
          </fieldset>
          <p>Los campos (<span style={{ color: 'red' }}>*</span>) marcados con un asterisco son obligatorios.</p>
          <div className='d-flex justify-content-center'>
            <button
              className='btn btn-primary' onClick={() => {
                new bootstrap.Modal(document.getElementById('exampleModal')).show();
              }}
            >Enviar<i className='bi bi-send mx-1' />
            </button>
          </div>
        </div>

      </div>

      <h2 className='mx-5'><u>Nuestras Redes Sociales</u></h2>
      <div className='mx-5 text-black' id='redes'>
        <div className='row mt-3' id='instagram'>
          <p>
            <a
              className='link-dark text-decoration-none'
              href='https://www.instagram.com/'
            >
              <i className='bi bi-instagram d-inline mx-2' />
              <p className='d-inline'>FunkoShopInterfaces</p>
            </a>
          </p>
        </div>
        <div className='row' id='facebook'>
          <p>
            <a
              className='link-dark text-decoration-none'
              href='https://es-es.facebook.com/'
            >
              <i className='bi bi-facebook d-inline mx-2' />
              <p className='d-inline'>FunkoShopInterfaces</p>
            </a>
          </p>
        </div>
        <div className='row' id='twitter'>
          <p>
            <a
              className='link-dark text-decoration-none'
              href='https://twitter.com/'
            >
              <i className='bi bi-twitter d-inline mx-2' />
              <p className='d-inline'>FunkoShopInterfaces</p>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Contact;
