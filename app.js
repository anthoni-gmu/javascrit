
//Lo Necesario de javascrit para empesar en react 

//concatenar 

const nombre = "Carlos";
const apellido = "Juan";

console.log(`${nombre} ${apellido}`);

//ejemplo 
function Componente({background }){
    return (<div classname={`bg-color-${background}`}>hola</div>);
 }



const edad=36;
const twitter='https://www.twitter.com'
const persona ={
    nombre,
    edad,
    twitter,
}

console.log(persona);

//ejemplo 
function Componente({initialState,totalCount}){
    const[State,setState] = useState({initialState,totalCount});
}