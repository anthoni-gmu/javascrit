//forma basica de una funcion

function nombreDelaFuncion(){
    return console.log("hola");
}
nombreDelaFuncion();

//funcion flecha si tiene varias propiedades se agrega {return }
const funcionFlecha = () => console.log("xd")

funcionFlecha();

//ejemplo listado 
function ListaTarea(){
    return (
        <ul>
            {listado.map(elemento =>(<li>{elemnto.nombre}</li>)})
        </ul>
    )
}