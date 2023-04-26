import 'bootstrap-icons/font/bootstrap-icons.css';
import { useModal } from '../../components/Modal';
import { useState } from 'react';

export const Contact = () => {
  const [modal, showModal] = useModal({ type: 'solicitud' });
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [tema, setTema] = useState('');
  const [consulta, setConsulta] = useState('');

  function validate () {
    return nombre.length && apellidos.length && email.length && confirmarEmail.length && tema.length && consulta.length;
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

        <fieldset className='border p-3'>
          <legend className='w-auto'>Formulario de contacto</legend>
          <p>Los campos marcados con un asterisco (<span style={{ color: '#cd2026' }}>*</span>) son obligatorios</p>

          <div className='m-3 col-5 Auth-form-container'>
            <div className='m-3 d-flex d-flex-row'>
              <label className='input-group' htmlFor='nombre'>Nombre <span style={{ color: '#cd2026' }}>*</span></label><input onChange={(e) => setNombre(e.target.value)} className='form-control' id='nombre' type='text' />
            </div>

            <div className='m-3 d-flex d-flex-row'>
              <label className='input-group' htmlFor='apellidos'>Apellidos <span style={{ color: '#cd2026' }}>*</span></label><input onChange={(e) => setApellidos(e.target.value)} className='form-control' id='apellidos' type='text' />
            </div>

            <div className='m-3 d-flex d-flex-row'>
              <label className='input-group' htmlFor='telefono'>Número de teléfono</label><input className='form-control' id='telefono' type='text' />
            </div>

            <div className='m-3 d-flex d-flex-row'>
              <label className='input-group' htmlFor='email'>Correo electrónico <span style={{ color: '#cd2026' }}>*</span></label><input onChange={(e) => setEmail(e.target.value)} className='form-control' id='email' type='text' />
            </div>

            <div className='m-3 d-flex d-flex-row'>
              <label className='input-group' htmlFor='confimarEmail'>Confirma tu correo<span style={{ color: '#cd2026' }}>*</span></label><input onChange={(e) => setConfirmarEmail(e.target.value)} className='form-control' id='confimarEmail' type='text' />
            </div>

            <div className='m-3 d-flex d-flex-row'>
              <label className='input-group' htmlFor='pedido'>Número de pedido</label><input className='form-control' id='pedido' type='text' />
            </div>

            <div className='m-3 d-flex d-flex-row'>
              <label className='input-group' htmlFor='tema'>Tema de la consulta <span style={{ color: '#cd2026' }}>*</span></label>
              <select id='tema' className='mx-2 p-2 w-75' onChange={(e) => setTema(e.target.value)}>
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

            <div className='m-3'>
              <label className='input-group' htmlFor='consulta'>Consulta <span style={{ color: '#cd2026' }}>*</span></label><textarea onChange={(e) => setConsulta(e.target.value)} cols={55} rows={5} id='consulta' />
            </div>

            <div className='m-3'>
              <label className='mx-3'>Anexar Documentos</label><button className='mx-3 btn btn-secondary'>Adjuntar documentos</button>
            </div>
            <p className='mx-3'>Los campos (<span style={{ color: '#cd2026' }}>*</span>) marcados con un asterisco son obligatorios.</p>
            <div className='d-flex justify-content-center'>
              <button
                disabled={!validate()}
                className='btn btn-primary '
                style={{
                  backgroundColor: !validate() ? '#12206B !important' : '#2641DE !important',
                  opacity: !validate() ? '0.75' : '1'
                }}
                onClick={() => {
                  showModal();
                // new bootstrap.Modal(document.getElementById('exampleModal')).show();
                }}
              >Enviar<i className='bi bi-send mx-1' />
              </button>
            </div>
          </div>

        </fieldset>
      </div>

    </>
  );
};
export default Contact;
