import {Link} from "react-router-dom";

export const Funko = (props) => {



    return (
         
     <>

    <div style={{width: "100%"}}>
        <div style={{width: "50%", height: "620px", float: "left"}}> 
           <img src={props.image} style={{marginLeft: "15%", marginTop:"15%"}}></img>
        </div>
        <div style={{marginLeft: "50%", height: "620px"}}> 
            <h1>{props.name}</h1>
            <br></br>
            <h3><i>Aqui va la descripcion en caso de que la encontremos</i></h3>
            <br></br>
            <br></br>
            <br></br>
           <div class="dropdown">
           Seleccionar cantidad: &nbsp;
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cantidad
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">1</a></li>
                    <li><a class="dropdown-item" href="#">2</a></li>
                    <li><a class="dropdown-item" href="#">3</a></li>
                    <li><a class="dropdown-item" href="#">4</a></li>
                    <li><a class="dropdown-item" href="#">5</a></li>
                    <li><a class="dropdown-item" href="#">6</a></li>
                </ul>
            </div>
            
            <br></br>
            <br></br>
            <button id="añadirCesta">Añadir a la cesta</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to={"/Home"}> <button id="volver">Volver a página principal</button> </Link>

        </div>
    </div>
        
     </>
            
    );

}
export default Funko;