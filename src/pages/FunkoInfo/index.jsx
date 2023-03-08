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

            <h3><i>Aqui va la descripcion en caso de que la encontremos</i></h3>
            
            <Link to={"/Home"}> <button id="volver">Volver a página principal</button> </Link>
            <br></br>
            <br></br>
            <button id="añadirCesta">Añadir a la cesta</button>

        </div>
    </div>
        
    


     </>
            
    );

}
export default Funko;