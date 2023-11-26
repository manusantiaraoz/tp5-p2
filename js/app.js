
class Persona{
  #nombre
  #edad
  #DNI
  #sexo
  #peso
  #altura
  #anioNacimiento
  
  constructor(nombre,edad,dni,sexo,peso,altura,anio){
  this.#nombre=nombre;
  this.#edad=edad;
  this.#DNI=dni;
  this.#sexo=sexo;
  this.#peso=peso;
  this.#altura=altura;
  this.#anioNacimiento=anio;
  }
  mostrarGeneracion(){
      let decada =this.#anioNacimiento%100;
      if(decada > 29 && decada <= 48){
  
          document.write(`<p>${decada} tu generación es "Silent Generation" su rasgo caracteristico es: la austeridad</p>`);
  
      }else if(decada>48 && decada <= 68){
          document.write(`<p>${decada} tu generación es "Baby Boom" su rasgo caracteristico es: la ambición</p>`);
  
      }else if(decada>68 && decada <= 80){
          
          document.write(`<p>${decada} tu generación es "Generación X" su rasgo caracteristico es: la obsesión por el éxito</p>`);
  
  
      }else if(decada>80 && decada <= 93){
  
          document.write(`<p>${decada} tu generación es "Generación Y, millennials" su rasgo caracteristico es: la Frustración</p>`);
          
      }else if(decada>93){
  
          document.write(`<p>${decada} tu generación es "Generación Z" su rasgo caracteristico es: la Irreverencia</p>`);
          
      }else{
          document.write(`<p>aún no peseemos informacion de tu generación</p>`);
      }
  }
  esMayorDeEdad(){
      let anio = new Date(); 
      let edad =  anio.getFullYear() - this.#anioNacimiento ;
  if(edad>=18){
      document.write(`<p>${this.#nombre} es mayor de edad</p>`);
  }else{
      document.write(`<p>${this.#nombre} es menor de edad</p>`);
  }
  }
   
  mostrarDatos(){
      document.write(`<p>nombre: ${this.#nombre}; edad: ${this.#edad}; dni: ${this.#DNI}; sexo: ${this.#sexo}; peso: ${this.#peso}; altura: ${this.#altura}; año: ${this.#anioNacimiento} </p>`);
  }
  generaDNI(){
      return this.#DNI = Math.floor(Math.random() * 90000000 );
  }
  
  }
  
  let p1 = new Persona("santi", 28, 0, "M", 120, 1.95, 1995);
  
 


/*
const textNumero = document.getElementById("textNumero");
const formulario = document.querySelector("form");
const botonComprobar = document.querySelector(".btn-outline-light");
const btnNuevoJuego = document.getElementById("btnNuevoJuego");
const infoInput = document.getElementById("inputNumero");

let randomVariable;

function nuevoJuego() {
  textNumero.innerHTML = "?";
  randomVariable = Math.floor(Math.random() * 99);
}

const comprobar = (e) => {
  e.preventDefault();
  let ingreso = parseInt(infoInput.value);
  if (ingreso === randomVariable) {
    textNumero.innerHTML = `${randomVariable}`;
    alert("GANASTE!!");
  } else if (ingreso < randomVariable) {
    alert("casi, el numero que buscas es mayor al numero ingresado");
  } else if (ingreso > randomVariable) {
    alert("casi, el numero que buscas es menor al numero ingresado");
  }
  formulario.reset();
};

const iNumero=document.querySelector("#inputNumero");
iNumero.value;
formulario.reset();
btnNuevoJuego.addEventListener("click", nuevoJuego);
formulario.addEventListener("submit", comprobar);

*/