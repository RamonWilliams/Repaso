let myAvenger = new Object();

myAvenger.name = "Capitán América";
myAvenger.age = 29;
myAvenger['lastname'] = "Rodríguez";
console.log(myAvenger);


/*Usando For in para recorrer objetos y recapitulando una forma que se había olvidado de acceder
a los valores de un objeto */

let xbox = {
    name:"Xbox X",
    power:"Top"
};

for(key in xbox){
    console.log(`Estas serían las propiedades: ${key} con el valor de ${xbox[key]}`)
};


/*Object.keys(o)Este método devuelve un arreglo con todos los nombres de propiedades 
enumerables (claves) propias (no en la cadena de prototipos) de un objeto o;
Este MÉTODO ES INTERESANTE PORQUE NOS CONVIERTE NUESTRO OBJETO EN UN Array, vamos a poner un ejemplo 
*/

let videoGame = {
    name:"PlayStation",
    power:"Top"
}

for(key in videoGame){
    console.log(videoGame[key])
}

 const array = Object.keys(videoGame);
 console.log(array);


/* Funciones constructoras
 Como alternativa, puedes crear un objeto con estos dos pasos:

 Definir el tipo de objeto escribiendo una función constructora. Existe una fuerte convención,
  con buena razón, para utilizar en mayúscula la letra inicial.
 Crear una instancia del objeto con el operador new.

Para definir un tipo de objeto, crea una función para el objeto que especifique su nombre, 
propiedades y métodos. Por ejemplo, supongamos que deseas crear un tipo de objeto para coches.
 Quieres llamar **Car** a este tipo de objeto, y deseas que tenga las siguientes propiedades: make, model y 
 year**. Para ello, podrías escribir la siguiente función.*/

 const Car = (make, model, year) =>{
    this.make = make,
    this.model = model,
    this.year = year
 }

// const myCar = new Car("Steel", "Citroen", 2022);



const Manager1 = {
    name:"Jhon",
    age:29,
    job:"Web developer"
}

const Intern1 = {
    name:"Will",
    age: 29 ,
    jop:"employee"
}


const sayHi = (person) => {
     console.log('Hola, mi nombre es:'+" "+ person.name)
}
sayHi(Manager1)

for(key in Manager1){
    console.log(Manager1[key])
}


console.log(Object.keys(Manager1));

/*-----------------------*/


const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  }
  
  const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  }
  
  const sayHello = () => {
      console.log('Hola, mi nombre es ', this.name)
  }
  
  // agrega la función sayHi a ambos objetos
  Manager.sayHello = sayHello;
  Intern.sayHello = sayHello;
  
  Manager.sayHello() // Hola, mi nombre es John'
  Intern.sayHello() // Hola, mi nombre es Ben'



//   definición captadores → getters & setters
//   Un captador (getter) es un método que obtiene el valor de una propiedad específica.
//    Un establecedor (setter) es un método que establece el valor de una propiedad específica.
//     Puedes definir captadores y establecedores en cualquier o
//   principal predefinido o en un objeto definido por el usuario 
//que admita la adición de nuevas propiedades.


var o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  
  console.log (o.a); // 7
  console.log (o.b); // 8 <-- En este punto se inicia el método get b().
  o.c = 50;         // <-- En este punto se inicia el método set c(x)
  console.log(o.a); // 25


  //Como eliminar propiedades de un objeto
  /*Para ello vamos a utilizar el operador Delete que su info esta en POO */

var myGame = new Object();
myGame.name = "Xbox";
myGame.price = 600;
myGame.year = 2019;

delete myGame.year,
console.log(myGame);

for(key in myGame){
    console.log(myGame[key])   
}

console.log(Object.keys(myGame))

// Uso de entries para devolver un array
// El método Object.entries()nos permite generar un array cuyos elementos son arrays correspondientes
// a las claves y valores que tengan cada una de las propiedades de un objeto.
// El orden de estos arrays será el mismo que el que tendríamos recorriendo el objeto manualmente.



const character = {
    firstName: 'James',//Este sería un array
    lastName: 'Bond',//Este sería otro 
    age: 50,//Este sería otro
    code: 007 //Este sería otro
};

const agent = Object.entries(character);
console.log(agent);


  responses = Object.entries(myGame)
  console.log(responses)

  