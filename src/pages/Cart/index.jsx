import { Link } from 'react-router-dom';

export const Cart = (props) => {
  return (

    <div className='container'>

      <div className='row border border-2' style={{ marginTop: '5%' }}>

        <div className='col'>

          <img src={props.image} style={{ marginTop: '15%', scale: '50%' }} />
        </div>

        <div className='col' style={{ marginTop: '15%' }}>
          <h4 className='text-center'>{props.name}</h4>
        </div>

        <div className='col' style={{ marginTop: '15%' }}>
          <div className='dropdown p-1 text-center'>
            <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
              Editar Cantidad
            </button>
            <ul className='dropdown-menu'>
              <li><a className='dropdown-item' href='#'>1</a></li>
              <li><a className='dropdown-item' href='#'>2</a></li>
              <li><a className='dropdown-item' href='#'>3</a></li>
              <li><a className='dropdown-item' href='#'>4</a></li>
              <li><a className='dropdown-item' href='#'>5</a></li>
              <li><a className='dropdown-item' href='#'>6</a></li>
              <li><a className='dropdown-item' href='#'>7</a></li>
              <li><a className='dropdown-item' href='#'>8</a></li>
              <li><a className='dropdown-item' href='#'>9</a></li>
            </ul>
          </div>

        </div>

        <div className='col' style={{ marginTop: '15%' }}>
          <h6 className='text-center'>{props.price}€</h6>
        </div>

        <div className='col' style={{ marginTop: '15%' }}>
          <button id='login' class=' btn btn-danger mx-1'>Eliminar Funko</button>
        </div>

      </div>

      <div className='mt-5 border border-2'>

        <div>
          <h4 className='mt-3'>&nbsp; Total articulos: 7.00€</h4>
          <h4>&nbsp; Envío: 2.00€ <button type='button' class='bi bi-info-circle' data-bs-toggle='modal' data-bs-target='#exampleModal' /></h4>

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

        <div className='mb-3'>
          <h2 style={{ float: 'left' }}>&nbsp; Total a pagar:</h2>

          <h3 className='text-end'>9.00€ &nbsp;</h3>
        </div>

      </div>

      <button style={{ float: 'right' }} type='button' class='btn btn-success mt-4'>Completar compra</button>

    </div>
  );
};
