import { Link } from "react-router-dom";

export const funko = () => {
    return(
        <div className="funko" id="funko_harryPotter">
            <a href="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg">
            <Link to={"/Funko"}> <img src="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Imagen de Funko" title="Funko Harry Potter"/> </Link> </a> 
            <p>Harry Potter</p>

            <div className="funko_item_priceSection">
                <p id="funko_harryPotter_price" className="funko_item_price"><strong>7.99 $</strong></p>
                <Link to={"/Funko"}> <button id="funko_harryPotter_buy">Añadir a la cesta</button> </Link>
            </div>
        </div>
    );
}

export default funko;