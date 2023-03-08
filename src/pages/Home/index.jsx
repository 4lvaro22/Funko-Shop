import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <nav>
                {/*Buscador por palabras*/}
                <input type="text" placeholder="Buscar...."/>
            </nav>

            {/*<-- Lado -->*/}
            <aside>  {/*<-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... -->*/}
                <h2>Filtros</h2>
            </aside>

            {/*<-- Seccion -->*/}
            <section>
                <h2>Catálogo</h2>

                <div className="funko" id="funko_harryPotter">
                    <a href="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg"><img
                        src="https://m.media-amazon.com/images/I/61rvig8NbQL.__AC_SX300_SY300_QL70_ML2_.jpg"
                        alt="Imagen de Funko" title="Funko Harry Potter"/></a>
                    <p>Harry Potter</p>
                    
                    <div className="funko_item_priceSection">
                        <p id="funko_harryPotter_price" className="funko_item_price"><strong>7.99 $</strong></p>

                        <Link to={"/Funko"}> <button id="funko_harryPotter_buy">Comprar</button> </Link>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;