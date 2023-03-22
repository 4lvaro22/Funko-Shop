import { Link } from 'react-router-dom';
import { FunkoEnCarrito } from './../../components/funkoEnCarrito';

export const Cart = (props) => {
  return (

    <div className='container'>

      <FunkoEnCarrito funko={props.funko} />

      <FunkoEnCarrito funko={props.funko} />

      <div className='row mt-5 border border-2'>

        <div className='mx-2'>
          <h4 className='mt-3'> Subtotal: 85.00€</h4>
          <h4>Envío: 2.00€ <button type='button' class='bi bi-info-circle' data-bs-toggle='modal' data-bs-target='#exampleModal' /></h4>

          <div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div class='modal-dialog'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLabel'>Precio envios</h5>
                  <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                </div>
                <div class='modal-body'>
                  En cualquier pedido, independientemente del coste total de los articulos, se le aplicara un coste de envió total de 2€.
                </div>
                <div class='modal-footer'>
                  <button type='button' class='btn btn-primary' data-bs-dismiss='modal'>Cerrar</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='mb-3 mx-2'>
          <h2 style={{ float: 'left' }}> Total a pagar:</h2>

          <h3 className='text-end'>87.00€</h3>
        </div>

      </div>

      <button style={{ float: 'right' }} type='button' class='btn btn-success mt-4'>Completar compra</button>

    </div>
  );
};
