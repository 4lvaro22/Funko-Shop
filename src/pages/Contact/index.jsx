import 'bootstrap-icons/font/bootstrap-icons.css';
import { useModal } from '../../components/Modal';
import { useState, useEffect } from 'react';
import validator from 'validator';

export const Contact = () => {
  const [modal, showModal] = useModal({ type: 'solicitud' });
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [tema, setTema] = useState('');
  const [consulta, setConsulta] = useState('');

  const validateName = () => {
    return nombre.length >= 3;
  };
  const validateSurname = () => {
    return apellidos.length >= 3;
  };

  const validateEmail = () => {
    const posicionDominio = email.lastIndexOf('.');

    if (validator.isEmail(email)) {
      return true;
    } else if (email.substring(posicionDominio).length <= 3) {
      return false;
    }
    return false;
  };

  const validateConfirmarEmail = () => {
    const posicionDominio = confirmarEmail.lastIndexOf('.');

    if (validator.isEmail(confirmarEmail) && email === confirmarEmail) {
      return true;
    } else if (confirmarEmail.substring(posicionDominio).length <= 3) {
      return false;
    }
    return false;
  };

  function validate () {
    return validateName() && validateSurname() && validateEmail() && validateConfirmarEmail() && tema.length && consulta.length;
  }

  useEffect(() => {
    document.title = 'Contacto | FunkoShop';
  }, []);

  const buttonColor = (!validate()) ? '#000000' : '#FFFFFF';

  return (
    <>
      <div className='container m-4'>
        {modal}
        {/* <AddedModal alert='Se ha enviado su colicitud correctamente' out='Salir' value='3' /> */}
        <h1><strong>Contacta con nosotros</strong></h1>
        <p>Si tienes cualquier duda sobre tu compra o consulta sobre nuestras tiendas, puedes contactar con nosotros como prefieras.
          Estamos a tu disposición para ayudarte.
        </p>
        <ul>
          <li>Por teléfono: 999 999 999</li>
          <li>Por correo electrónico: funkoshop@gmail.com</li>
          <li>A través de nuestras redes sociales</li>
          <li>O Puedes enviarnos tu consulta a través de este formulario:</li>

        </ul>
        <div className='container my-3' title='Registro' aria-label='Contacto'>
          <fieldset className='row col-11'>
            <legend className='fs-3'><strong>Formulario de contacto</strong></legend>
            <form className='mx-4' title='Formulario de Contacto'>
              {/* NOMBRE */}
              <div className='row g-3 align-items-center '>
                <div className='col-auto'>
                  <label htmlFor='txtNombre' className='col-form-label'>Nombre <span style={{ color: '#D90000' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-person' /></span>
                    <input
                      aria-required='true' id='txtNombre' className='form-control' type='text'
                      autofocus='' autocapitalize='none'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* APELLIDOS */}
              <div className='row g-3 align-items-center '>
                <div className='col-auto'>
                  <label htmlFor='txtApellidos' className='col-form-label'>Apellidos <span style={{ color: '#D90000' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-person' /></span>
                    <input
                      aria-required='true' id='txtApellidos' className='form-control' type='text'
                      autofocus='' autocapitalize='none'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* TELEFONO */}
              <div className='row g-3 align-items-center '>
                <div className='col-auto'>
                  <label htmlFor='txtTelefono' className='col-form-label'>Número de teléfono <span style={{ color: '#D90000' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-telephone' /></span>
                    <input
                      aria-required='true' id='txtTelefono' className='form-control' type='text'
                      autofocus='' autocapitalize='none'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* CORREO */}
              <div className='row g-3 align-items-center '>
                <div className='col-auto'>
                  <label htmlFor='txtCorreo' className='col-form-label'>Correo electrónico <span style={{ color: '#D90000' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-envelope-at' /></span>
                    <input
                      aria-required='true' id='txtCorreo' className='form-control' type='text'
                      autofocus='' autocapitalize='none'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* CONFIRMAR CORREO */}
              <div className='row g-3 align-items-center '>
                <div className='col-auto'>
                  <label htmlFor='txtconfirmCorreo' className='col-form-label'>Confirmar correo electrónico <span style={{ color: '#D90000' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-envelope-at' /></span>
                    <input
                      aria-required='true' id='txtconfirmCorreo' className='form-control' type='text'
                      autofocus='' autocapitalize='none'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* PEDIDO */}
              <div className='row g-3 align-items-center '>
                <div className='col-auto'>
                  <label htmlFor='txtPedido' className='col-form-label'>Número de pedido <span style={{ color: '#D90000' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-box-seam' /></span>
                    <input
                      aria-required='true' id='txtPedido' className='form-control' type='text'
                      autofocus='' autocapitalize='none'
                      required
                    />
                  </div>
                </div>
              </div>

              {/* TEMA CONSULTA */}
              <div className='row g-3 align-items-center '>
                <div className='col-auto'>
                  <label htmlFor='txtConsulta' className='col-form-label'>Tema de consulta <span style={{ color: '#D90000' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <select id='tema' className='p-2 w-750' onChange={(e) => setTema(e.target.value)} arial-required='true'>
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
                </div>
              </div>

              {/* CONSULTA */}
              <div className='m-3'>
                <div>

                  <label htmlFor='consulta'>Consulta <span style={{ color: '#cd2026' }}>*</span></label>
                </div>
                <div>
                  <textarea onChange={(e) => setConsulta(e.target.value)} style={{ width: '60%' }} rows={5} id='consulta' arial-required='true' />
                </div>
              </div>

              {/* DOCUMENTOS */}
              <div className='m-3 d-flex d-flex-row'>
                <div>
                  <p className='mx-3'>Anexar Documentos</p>
                </div>

                <div id='documentos'>
                  <button className='mx-3 btn btn-secondary'>Adjuntar documentos</button>
                </div>
              </div>

              {/* BOTON ENVIAR */}
              <p className='mx-3 fst-italic'>(<span style={{ color: '#cd2026' }}>*</span>) Los campos marcados con un asterisco en rojo son obligatorios.</p>
              <div className='d-flex justify-content-center col-8'>
                <button
                  disabled={!validate()}
                  tabIndex={!validate() ? '-1' : 0} role='button' aria-disabled={!validate()}
                  className='btn btn-primary '
                  style={{ buttonColor }}
                  onClick={() => {
                    showModal();
                    // new bootstrap.Modal(document.getElementById('exampleModal')).show();
                  }}
                >Enviar<i className='bi bi-send mx-1' />
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
};
export default Contact;
