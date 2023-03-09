import {Link} from "react-router-dom";

export const Funko = (props) => {



    return (
         
     <>

    <div className="container">
       
        <div className="row">


            <div className="col"> 
            
            {/*  */}
                <img src={props.image} style={{marginLeft: "15%", marginTop:"15%"}}></img>
            </div>
            
            <div className="col d-grid gap-3"> 

                <h1 className="p-1">{props.name}</h1>
                
                <h3 className="p-1"><i>Aqui va la descripcion en caso de que la encontremos</i></h3>
                
                <div className="dropdown p-1">
                Seleccionar cantidad: &nbsp;
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cantidad
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">1</a></li>
                        <li><a className="dropdown-item" href="#">2</a></li>
                        <li><a className="dropdown-item" href="#">3</a></li>
                        <li><a className="dropdown-item" href="#">4</a></li>
                        <li><a className="dropdown-item" href="#">5</a></li>
                        <li><a className="dropdown-item" href="#">6</a></li>
                    </ul>
                </div>
                
                <div className="p-2">
                    <button id="añadirCesta">Añadir a la cesta</button>
                </div>
                
                <div className="p-2">
                    <Link to={"/Home"}> <button id="volver">Volver a página principal</button> </Link>
                </div>
           

            </div>

        </div>

    </div>
        
     </>
            
    );

}
export default Funko;