import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import data from '../../data';
import CartRow from './CartRow';

const useLocalStorage = (storageKey, fallbackState) => {
  const storedValue = localStorage.getItem(storageKey);
  const [value, setValue] = useState(
    storedValue === null || storedValue === undefined ? fallbackState : JSON.parse(storedValue)
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export const Cart = (props) => {
  const [funko, setFunko] = useLocalStorage('funko', []);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

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
        <CartRow key={itemFunko.handle} itemFunko={itemFunko} quantity={quantity} />
      );
    });
    setTotal(newTotal);
    setItems(itemsList);
  }, []);

  return (

    <div className='container'>

      <div>
        {items}
      </div>

      <div className='mt-5 border border-2'>

        <div className='mx-2'>
          <h4 className='mt-3'>Total articulos: {total}€</h4>
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

          <h3 className='text-end'>{total + 2}€</h3>
        </div>

      </div>

      <button style={{ float: 'right' }} type='button' class='btn btn-success mt-4'>Completar compra</button>

    </div>
  );
};
