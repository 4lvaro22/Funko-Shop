export const Funko = (name,image,price) => {

    return (
         
        <div style="width: 100%;">

            <div style="width: 50%; float: left;"> 
                <img src={image}></img>
            </div>

            <div style="margin-left: 50%;"> 
               
                <h1>{name}</h1>
                <br></br>
                <br></br>
                <p>Precio : {price}$</p>
                <br></br>
                <br></br>
                <button>Comprar</button>

            </div>

        </div>
            
    );

}
export default Funko;