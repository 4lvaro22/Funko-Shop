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
            Seleccionar cantidad: dropdown button 1..10
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