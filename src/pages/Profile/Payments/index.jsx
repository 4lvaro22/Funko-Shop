export const PaymentSection = ({user}) => {

  return (
    <>
      <h3>Información de pago</h3>
      <div></div>
      <p>
        <strong>Tarjeta:</strong> {user?.card?.number}
      </p>
      <p>
        <strong>Fecha de caducidad:</strong> {user?.card?.exp}
      </p>
      <p>
        <strong>Código de seguridad:</strong> {user?.card?.cvv}
      </p>
    </>
  );
};
