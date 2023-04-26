import { FunkoEnCarrito } from './FunkoItemCarrito';
import { React, useEffect, useState } from 'react';
import data from '../../data';
import { removeFunko, getFunkosData } from '../../data/storage';
import AddedModal from '../../components/addedModal';

export const Cart = (props) => {
  const [funko, setFunko] = useState(getFunkosData());
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const deleteFunkoChild = (funkoItem) => {
    const funkoCopy = [];

    funko.forEach(element => {
      if (element.id !== funkoItem.handle) { funkoCopy.push(element); }
    });

    removeFunko(funkoItem.handle);

    setFunko(funkoCopy);
  };

  const deleteShoppingCart = () => {
    funko.forEach(element => {
      removeFunko(element.id);
    });
  };

  const updateQuantity = () => {
    const funkosData = getFunkosData();
    setFunko(funkosData);
  };

  useEffect(() => {
    let newTotal = 0;
    const itemsList = [];

    funko.forEach(element => {
      const funkoId = element.id;
      const quantity = element.quantity;

      const itemFunko = data.getFunkoById(funkoId);
      if (!itemFunko) { return; }

      newTotal += itemFunko.price * quantity;

      itemsList.push(
        <FunkoEnCarrito key={itemFunko.handle} funko={itemFunko} fixQuantity={quantity} remove={deleteFunkoChild} updateQuantity={updateQuantity} />
      );
    });

    setTotal(newTotal);
    setItems(itemsList);
    return () => {
      setItems([]);
      setTotal(0);
    };
  }, [funko]);

  return (

    <div className='container'>

      <div className='row'>
        <div className='col-12'>
          <h1 className='mt-2'>Carrito</h1>
        </div>
      </div>

      <div className='container'>
        {items.length === 0 && <div className='mt-3 border border-2'> <h4 className='m-3'>No hay articulos en el carrito</h4> </div>}
        {items}
      </div>

      <div className='mt-4 border border-2'>

        <div className='mx-2'>
          <h4 className='mt-3'>Total articulos: {total}€</h4>
          <h4>Envío: 2.00€ <button type='button' className='bi bi-info-circle' data-bs-toggle='modal' data-bs-target='#exampleModal' /></h4>

          <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>Precio envios</h5>
                  <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                </div>
                <div className='modal-body'>
                  En cualquier pedido, independientemente del coste total de los articulos, se le aplicara un coste de envió total de 2€.
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Cerrar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='mb-3 mx-2 me-3'>
          <h2 className='float-start'> Total a pagar:</h2>

          <h3 className='text-end'>{total + 2}€</h3>
        </div>

      </div>

      <div className='row'>
        <div className='col-2 offset-md-10'>

          <AddedModal id='botonCompra' value='3' out='Salir' alert='Compra completada. Su pedido se esta enviando.' />
          <button
            disabled={items.length === 0}
            onClick={() => {
              deleteShoppingCart();
              new bootstrap.Modal(document.getElementById('botonCompra')).show();
            }} className='btn btn-success my-4'
          >Completar compra
          </button>
        </div>
      </div>

    </div>
  );
};
