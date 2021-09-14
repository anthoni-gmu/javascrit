
//forma en basica
const cuadrado ={
    x:10,
    y:10,
}
function calcularArea(cuadrado){
    return console.log(cuadrado.x * cuadrado.y);
}

calcularArea(cuadrado)

//forma avanzada
const cuadrado ={
    x:10,
    y:10,
}
function calcularArea(cuadrado){
    const {x, y} = cuadrado
    return console.log(x*y);
}

calcularArea(cuadrado)

//forma aun mas avanzada

const cuadrado ={
    x:10,
    y:10,
}
function calcularArea({x, y}){
    return console.log(x*y);
}

calcularArea(cuadrado)
//ejemplo

function Avatar({username,url}){
    return <img src={url} alt={username}/>
}