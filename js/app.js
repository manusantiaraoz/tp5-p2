
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

  set setNombre(n){
    this.#nombre=n;
  }
  set setEdad(n){
    this.#edad=n;
  }
  set setDni(n){
    this.#DNI=n;
  }
  set setSexo(n){
    this.#sexo=n;
  }
  set setPeso(n){
    this.#peso=n;
  }
  set setAltura(n){
    this.#altura=n;
  }
  set setAnio(n){
    this.#anioNacimiento=n;
  }




  mostrarGeneracion(){
      let decada =this.#anioNacimiento%100;
      if(decada > 29 && decada <= 48){
  
          return(`${decada} tu generación es "Silent Generation" su rasgo caracteristico es: la austeridad`);
  
      }else if(decada>48 && decada <= 68){
        return(`${decada} tu generación es "Baby Boom" su rasgo caracteristico es: la ambición`);
  
      }else if(decada>68 && decada <= 80){
          
        return(`${decada} tu generación es "Generación X" su rasgo caracteristico es: la obsesión por el éxito`);
  
  
      }else if(decada>80 && decada <= 93){
  
          return(`${decada} tu generación es "Generación Y, millennials" su rasgo caracteristico es: la Frustración`);
          
      }else if(decada>93){
  
          return(`${decada} tu generación es "Generación Z" su rasgo caracteristico es: la Irreverencia`);
          
      }else{
          return(`aún no peseemos informacion de tu generación`);
      }
  }
  esMayorDeEdad(){
      let anio = new Date(); 
      let edad =  anio.getFullYear() - this.#anioNacimiento ;
  if(edad>=18){
      return (`${this.#nombre} es mayor de edad`);
  }else{
      return(`${this.#nombre} es menor de edad`);
  }
  }
   
  mostrarDatos(){
    return (`nombre: ${this.#nombre}; \n edad: ${this.#edad}; \n dni: ${this.#DNI}; \n sexo: ${this.#sexo}; \n peso: ${this.#peso}; \n altura: ${this.#altura}; \n año: ${this.#anioNacimiento}`);
  }
  generaDNI(){
      return this.#DNI = Math.floor(Math.random() * 90000000 );
  }
  
  }
  const formulario = document.querySelector("form");
  const botonenviar = document.querySelector(".btn-outline-light");
  const nombre = document.getElementById("inputNombre");
  const edad = document.getElementById("inputEdad");
  const DNI = document.getElementById("inputDni");
  const sexo = document.getElementById("inputSexo");
  const peso = document.getElementById("inputPeso");
  const altura = document.getElementById("inputAltura");
  const anioNacimiento = document.getElementById("inputNacimiento");
  const btnDatos = document.getElementById("mostrarDatos");
  const btnMayor = document.getElementById("mayorEdad");
  const btnGeneracion = document.getElementById("generacion");
  const tDato = document.getElementById("tDato");

  let p1 = new Persona();
  
  const crearPersona = (e)=>{
    e.preventDefault();
    p1.setNombre =nombre.value
    p1.setEdad =parseInt(edad.value)
    p1.setDni =DNI.value
    p1.setSexo =sexo.value
    p1.setPeso =parseInt(peso.value)
    p1.setAltura =parseInt(altura.value)
    p1.setAnio =parseInt(anioNacimiento.value)
    
    formulario.reset();
    
  }
  
  const mostrar=()=>{
    tDato.innerHTML=`datos: ${p1.mostrarDatos()}`;
  }
  const mayorE=()=>{
    alert(`${p1.esMayorDeEdad()}`)
  }
  const generacion=()=>{
    alert(`${p1.mostrarGeneracion()}`)
  }
  
  formulario.addEventListener("submit", crearPersona);
  btnDatos.addEventListener("click",mostrar);
  btnMayor.addEventListener("click",mayorE);
  btnGeneracion.addEventListener("click",generacion);
 


