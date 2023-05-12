import Input from './Input';
import { useState } from 'react';
import { useModal } from '../../../components/Modal';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

export const PaymentForm = ({ usuario, updateUsuario, toFocus }) => {
  const [usuarioEditado, setUsuario] = useState(usuario);
  const [tarjetaModal, showTarjetaActualizada] = useModal({ type: 'tarjeta' });

  function update (value, key) {
    const newUsuario = { ...usuarioEditado, [key]: value };
    setUsuario(newUsuario);
  }

  return (
    <div className='padding m-2'>
      {tarjetaModal}
      <div className='row'>
        <div className='col-lg-10 col-xl-8'>
          <div className='card'>
            <form className='needs-validation'>
              <div className='card-header '>
                <strong>Editar tarjeta de crédito</strong>
                {/* <small>enter your card details</small> */}
              </div>
              <div className='card-body g-3 row'>
                <div className='col-md-1 col-lg-1 col-xl-1'> </div>
                <div className='col-10 col-md-11 col-lg-9 col-xl-8'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='form-group'>
                        <label for='name' className='form-label'>
                          Titular(Por defecto)
                        </label>
                        <Input
                          label='Titular' name='nombre' type='text' value={usuarioEditado.name + ' ' + usuarioEditado.surname}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-12'>
                      <div className='form-group'>
                        <label for='cardNumber'>Número de Tarjeta</label>
                        <div className='input-group'>
                          <Input
                            label='Numero de Tarjeta' name='number' type='text' value={usuarioEditado.card.number} onChange={(e) => {
                              console.log(usuarioEditado.card.number);
                              update({ ...usuarioEditado.card, number: e.target.value }, 'card');
                              console.log(usuarioEditado.card.number);
                            }}
                          />
                          <div className='input-group-append'>
                            <span className='input-group-text'>
                              <i className='bi bi-credit-card' />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-2'> </div>
                  </div>

                  <div className='mt-4'>
                    <i><u>Fecha de caducidad:</u></i>
                  </div>

                  <div className='row mt-1'>
                    <div className='form-group col-4 '>
                      <label for='ccmonth' className='fs-7'>Mes</label>
                      <select className='form-select' id='ccmonth'>
                        {months.map((month) => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    <div className='form-group col-5'>
                      <label for='ccyear'>Año</label>
                      <select className='form-select ' id='ccyear'>
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div className='col-3'>
                      <div className='form-group'>
                        <label for='cvv'>CVV/CVC</label>
                        <Input label='CVV' name='cvv' type='text' value={usuarioEditado.card.cvv} onChange={(e) => { update({ ...usuarioEditado.card, cvv: e.target.value }, 'card'); }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer'>
                <input
                  value='Guardar' name='save' type='button'
                  className='btn btn-sm btn-success float-right '
                  onClick={() => {
                    updateUsuario(usuarioEditado);
                    showTarjetaActualizada();
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
