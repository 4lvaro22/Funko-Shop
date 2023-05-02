import 'bootstrap-icons/font/bootstrap-icons.css';
import { useModal } from '../../components/Modal';
import { useState } from 'react';
import validator from 'validator';

export const Contact = () => {
  const [modal, showModal] = useModal({ type: 'solicitud' });
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [tema, setTema] = useState('');
  const [consulta, setConsulta] = useState('');

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
    return nombre.length && apellidos.length && validateEmail() && validateConfirmarEmail() && tema.length && consulta.length;
  }

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
          <div className='row'>
            <div className='col col-lg-7'>
              <form title='Formulario de Contacto'>
                <h2>Registrarme</h2>
                {/* NOMBRE */}
                <div className='m-3 d-flex d-flex-row'>
                  <div className='col-3'>
                    <label className='' htmlFor='nombre'>Nombre <span style={{ color: '#cd2026' }}>*</span></label>
                  </div>

                  <div className='col-2 mx-2'>
                    <input onChange={(e) => setNombre(e.target.value)} className='form-control' id='nombre' type='text' />
                  </div>
                </div>

                {/* APELLIDO */}
                <div className='m-3 d-flex d-flex-row'>
                  <div className='col-3'>
                    <label className='' htmlFor='apellidos'>Apellidos <span style={{ color: '#cd2026' }}>*</span></label>
                  </div>
                  <div className='col-2 mx-2'>
                    <input onChange={(e) => setApellidos(e.target.value)} className='form-control' id='apellidos' type='text' />
                  </div>
                </div>

                {/* TELEFONO */}
                <div className='m-3 d-flex d-flex-row'>
                  <div className='col-3'>
                    <label className='' htmlFor='telefono'>Número de teléfono</label>
                  </div>
                  <div className='col-2 mx-2'>
                    <input className='form-control' id='telefono' type='text' />
                  </div>
                </div>

                {/* CORREO */}
                <div className='m-3 d-flex d-flex-row'>
                  <div className='col-3'>
                    <label className='' htmlFor='email'>Correo electrónico<span style={{ color: '#cd2026' }}>*</span></label>
                  </div>

                  <div className='mx-2'>
                    <input onChange={(e) => setEmail(e.target.value)} className='form-control' id='email' type='text' />
                  </div>
                </div>

                {/* CONFIRMAR CORREO */}
                <div className='m-3 d-flex d-flex-row'>
                  <div className='col-3'>
                    <label className='' htmlFor='confimarEmail'>Confirma tu correo<span style={{ color: '#cd2026' }}>*</span></label>
                  </div>
                  <div className='mx-2'>
                    <input onChange={(e) => setConfirmarEmail(e.target.value)} className='form-control' id='confimarEmail' type='text' />
                  </div>
                </div>

                {/* PEDIDO */}
                <div className='m-3 d-flex d-flex-row'>
                  <div className='col-3'>
                    <label className='' htmlFor='pedido'>Número de pedido</label>
                  </div>
                  <div className='col-3 mx-2'>
                    <input className='form-control' id='pedido' type='text' />
                  </div>
                </div>

                {/* TEMA CONSULTA */}
                <div className='m-3 d-flex d-flex-row'>
                  <div className='col-3'>
                    <label className='' htmlFor='tema'>Tema de la consulta<span style={{ color: '#cd2026' }}>*</span></label>
                  </div>

                  <div className='col-6 mx-2'>
                    <select id='tema' className='p-2 w-100' onChange={(e) => setTema(e.target.value)}>
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

                {/* CONSULTA */}
                <div className='m-3'>
                  <div>

                    <label className='' htmlFor='consulta'>Consulta <span style={{ color: '#cd2026' }}>*</span></label>
                  </div>
                  <div>
                    <textarea onChange={(e) => setConsulta(e.target.value)} style={{ width: '60%' }} rows={5} id='consulta' />
                  </div>
                </div>

                {/* DOCUMENTOS */}
                <div className='m-3 d-flex d-flex-row'>
                  <div>
                    <label htmlFor='documentos' className='mx-3'>Anexar Documentos</label>
                  </div>

                  <div id='documentos'>
                    <button className='mx-3 btn btn-secondary'>Adjuntar documentos</button>
                  </div>
                </div>

                {/* BOTON ENVIAR */}
                <p className='mx-3'>Los campos (<span style={{ color: '#cd2026' }}>*</span>) marcados con un asterisco son obligatorios.</p>
                <div className='d-flex justify-content-center col-8'>
                  <button
                    disabled={!validate()}
                    className='btn btn-primary '
                    style={{
                      backgroundColor: !validate() ? '#12206B !important' : '#2641DE !important',
                      opacity: !validate() ? '0.75' : '1',
                      color: '#000'
                    }}
                    onClick={() => {
                      showModal();
                    // new bootstrap.Modal(document.getElementById('exampleModal')).show();
                    }}
                  >Enviar<i className='bi bi-send mx-1' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
