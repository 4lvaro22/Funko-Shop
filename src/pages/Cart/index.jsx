import { Link } from 'react-router-dom';
import { FunkoEnCarrito } from './../../components/funkoEnCarrito';
import { React, useEffect, useState } from 'react';
import data from '../../data';
import { removeFunko, getFunkosData } from '../../data/storage';

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

      <div>
        {items}
      </div>

      <div className='mt-5 border border-2'>

        <div className='mx-2'>
          <h4 className='mt-3'>Total articulos: {total}€</h4>
          <h4>Envío: 2.00€ <button type='button' className='bi bi-info-circle' data-bs-toggle='modal' data-bs-target='#exampleModal' /></h4>

          <div className='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
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

        <div className='mb-3 mx-2'>
          <h2 style={{ float: 'left' }}> Total a pagar:</h2>

          <h3 className='text-end'>{total + 2}€</h3>
        </div>

      </div>

      <button style={{ float: 'right' }} type='button' className='btn btn-success mt-4'>Completar compra</button>

    </div>
  );
};
