import { Link } from 'react-router-dom';

export const FunkoEnCarrito = (props) => {
  return (

    <div className='row border border-2 d-flex align-items-center' style={{ marginTop: '2%' }}>

      <div className='col'>

        <Link to='/FunkoInfo'> <img src={props.funko.imageName} width='110' height='145' className='mt-5 mb-5 mx-5' /></Link>
      </div>

      <div className='col'>
        <h4 className='text-center '>{props.funko.title}</h4>
      </div>

      <div className='col'>
        <select class='form-select' aria-label='Default select example'>
          <option selected>Seleccionar cantidad</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>

        </select>
      </div>

      <div className='col'>
        <h4 className='text-center'>{props.funko.price}€</h4>
      </div>

      <div className='col'>
        <button id='login' class=' btn btn-danger mx-1'>Eliminar Funko</button>
      </div>

    </div>

  );
};

export default FunkoEnCarrito;
