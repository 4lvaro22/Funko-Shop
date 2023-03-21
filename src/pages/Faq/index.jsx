import FaqCategory from './FaqCategory';

const ProductsQuestions = [
  {
    question: '¿Puedo devolver un producto?',
    reponse: 'No, no se aceptan devoluciones'
  },
  {
    question: '¿Puedo cambiar un producto?',
    reponse: 'No, no se aceptan cambios'
  },
  {
    question: '¿Puedo cambiar el tamaño de un producto?',
    reponse: 'No, no se aceptan cambios'
  },
  {
    question: '¿Puedo cambiar el color de un producto?',
    reponse: 'No, no se aceptan cambios'
  },
  {
    question: '¿Puedo cambiar el modelo de un producto?',
    reponse: 'No, no se aceptan cambios'
  }
];

const OrdersQuestions = [
  {
    question: '¿Dónde esta mi pedido?',
    reponse: 'En cuanto el pedido salga de nuestros almacenes recibirás un email de confirmación para que puedas hacer el seguimiento del envío directamente en la web del transportista (Ten en cuenta que la información del envío puede tardar hasta 24 horas en aparecer en la web del transportista). Recuerda revisar en tu email de confirmación de compra la fecha prevista de entrega (sábados y domingos no se consideran días laborables). '
  },
  {
    question: '¿Qué tengo que hacer si mi pedido llega dañado?',
    reponse: 'Si tu pedido llega dañado, por favor, ponte en contacto con nosotros a través de nuestro formulario de contacto o a través de nuestro email'
  },
  {
    question: '¿Cuánto tiempo me guardan mi pedido?',
    reponse: 'Si has seleccionado pagarlo en tienda: durante 3 días naturales una vez el pedido haya sido preparado. En cambio, si has utilizado otro método de pago: durante 7 días naturales una vez el pedido haya sido preparado. Pasados estos plazos se procederá a la cancelación y abono de tu pedido en el mismo método de pago que realizaste la compra.'
  },
  {
    question: '¿Cuándo puedo ir a recoger mi pedido?',
    reponse: 'Una vez hayas recibido el email de confirmación de tu pedido, podrás ir a recogerlo a la tienda que hayas seleccionado en un plazo máximo de 3 días naturales. Recuerda que el horario de recogida es de lunes a viernes de 10:00 a 14:00 y de 16:00 a 20:00 horas. '
  },
  {
    question: '¿Puedo recoger mi pedido en una tienda diferente a la que he realizado la compra?',
    reponse: 'No, no es posible recoger el pedido en una tienda diferente a la que has realizado la compra.'
  },
  {
    question: '¿Cómo puedo cancelar mi pedido?',
    reponse: 'Si deseas cancelar tu pedido, por favor, ponte en contacto con nosotros a través de nuestro formulario de contacto o a través de nuestro email'
  }
];

const RefundQuestions = [
  {
    question: '¿Cómo puedo hacer una devolución?',
    reponse: 'Podrás devolver tu pedido en cualquier tienda de la marca. Para ello, deberás presentar el ticket de compra y el producto en perfectas condiciones.'
  },
  {
    question: '¿Cuándo recibiré el abono de una devolución?',
    reponse: 'El abono se realizará en el mismo método de pago que utilizaste para realizar la compra. En caso de que el pago se haya realizado con tarjeta de crédito, el abono se realizará en un plazo máximo de 30 días naturales. En caso de que el pago se haya realizado con tarjeta de débito, el abono se realizará en un plazo máximo de 15 días naturales.'
  },
  {
    question: '¿Cuánto tiempo tengo para devolver mi pedido?',
    reponse: 'El plazo para devolver o cambiar tu pedido o tus compras realizadas en cualquiera de nuestras tiendas físicas es de 60 días'
  },
  {
    question: '¿Qué importe se me abonará por la devolución de un producto?',
    reponse: 'El importe que se te abonará por la devolución de un producto será el importe total de la compra, incluyendo los gastos de envío.'
  },
  {
    question: '¿Puedo recoger mi pedido en una tienda diferente a la que he realizado la compra?',
    reponse: 'No, no es posible recoger el pedido en una tienda diferente a la que has realizado la compra.'
  }
];

const DataQuestions = [
  {
    question: '¿Qué son datos personales?',
    reponse: 'Dato Personal es cualquier información relativa a una persona que nos es facilitada cuando dicha persona visita nuestro sitio web. Entre otros, se incluyen el nombre, apellidos, la dirección postal y electrónica, así como el número de teléfono. Adicionalmente, cuando visitas nuestro sitio web, determinada información es almacenada de forma automática por motivos técnicos (p.e, la dirección IP asignada por tu proveedor de acceso a Internet o el sitio web desde el cual has accedido a nuestro sitio web o el navegador que estás utilizando).'
  },
  {
    question: '¿Comunicamos tus datos personales?',
    reponse: 'No, no comunicamos tus datos personales a terceros.'
  },
  {
    question: '¿Están seguros sus datos personales con nosotros?',
    reponse: 'Sí, tus datos personales están seguros con nosotros. Para ello, hemos adoptado las medidas de seguridad necesarias para evitar el acceso no autorizado o uso indebido de los datos que nos facilitas.'
  },
  {
    question: '¿Cómo puedo modificar mis datos personales?',
    reponse: 'Puedes modificar tus datos personales accediendo a Mi Cuenta al apartado Datos Personales.'
  }
];

export const Faq = () => {
  return (
    <>
      <section>
        <div className='row mt-5'>
          <label for='faq' className='d-flex justify-content-center m-2 underline'><h1><strong><i>Preguntas Frecuentes</i></strong></h1></label>
          <div className='p-5 mb-5' id='faq'>
            <div className='row mx-4 d-flex justify-items-center'>
              <FaqCategory
                theme='Productos'
                questions={ProductsQuestions}
              />

              <FaqCategory
                theme='Devoluciones'
                questions={RefundQuestions}
              />

              <FaqCategory
                theme='Pedidos'
                questions={OrdersQuestions}
              />
              <FaqCategory
                theme='Tratamientos de datos personales'
                questions={DataQuestions}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
