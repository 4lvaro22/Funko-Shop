
export const FunkoInfo = (props) => {
  return (

    <>

      <div className='container'>

        <div className='row'>

          <div className='col'>

            {/*  */}
            <img src={props.funko.imageName} width='300' height='400' style={{ marginLeft: '15%', marginTop: '15%' }} />
          </div>

          <div className='col d-grid gap-3'>

            <h1 className='p-1 mt-5'>{props.funko.title}</h1>

            <div className='p-1'>
              <ul>
                <li><strong>Series:</strong> {props.funko.series.join(', ')}</li>
                <li><strong>Escala:</strong>  {props.funko.scale}</li>
                <li><strong>Fecha de lanzamiento:</strong>  {props.funko.released.year}</li>
                <li><strong>Valoracion:</strong> {props.funko.rating} <i class='bi bi-star-fill' /></li>
              </ul>

              <h4 className='mt-5' style={{}}>Precio: {props.funko.price} €</h4>

            </div>

            <div className='dropdown p-1'>
              Seleccionar cantidad: &nbsp;
              <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Cantidad
              </button>
              <ul className='dropdown-menu'>
                <li><a className='dropdown-item' href='#'>1</a></li>
                <li><a className='dropdown-item' href='#'>2</a></li>
                <li><a className='dropdown-item' href='#'>3</a></li>
                <li><a className='dropdown-item' href='#'>4</a></li>
                <li><a className='dropdown-item' href='#'>5</a></li>
                <li><a className='dropdown-item' href='#'>6</a></li>
                <li><a className='dropdown-item' href='#'>7</a></li>
                <li><a className='dropdown-item' href='#'>8</a></li>
                <li><a className='dropdown-item' href='#'>9</a></li>
              </ul>
            </div>

            <div className='p-2'>
              <button class=' btn btn-dark m-1' id='añadirCesta'>Añadir a la cesta</button>
            </div>
          </div>

        </div>

      </div>

    </>

  );
};
export default FunkoInfo;
