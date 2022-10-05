
/* Repaso de condicionales y bucles*/
let nombre = "Ramón"; 
if(nombre == "Ramón"){
     console.log("Wao, he acertado")
} //Siempre que la condicion se cumpla este mensaje aparecera en consola, sino no aparecera

let nombre2 = "Other"
if(nombre2 == "Ramón"){
    console.log("Que pena, pensaba que era Ramón")
}// Aqu vemos que no aparece

/*Respuestas Booleanas
Los booleanos nos van a permitir observar si una condición se cumple fácilmente, 
ya que su valor está comprendido en true o **`false`**.
Es por ello que la sentencia **`if (…)`** evalúa la expresión dentro de sus paréntesis y convierte el resultado en booleano.

- El número 0, un string vacío "", null, undefined, y NaN se convierte en false. 
Por esto son llamados valores false.

- El resto de los valores se convierten en `**true**`, entonces los llamaremos valores **`verdaderos`**.
*/

if(0){
    console.log("No me ejecuto")
}

if(1){
    console.log("Hola")
}


//Ahora veremos if else

let nombre3 = "Ramón";
if(nombre3 == "Williams"){
    console.log("Oye, estudiaste Javascript")
}else{
  console.log("Te has equivocado de nombre ")
}


if(nombre3 == "Williams"){
    console.log("Eres Nuevo?")
}else if(nombre3 == "Ramón"){
    console.log("Ya has estudiado programacion")
}else{
    console.log("Vuelve a intentarlo")
}

//Ternario

let accesAllowed; 

let age = 18; 

result = age >= 18? accesAllowed = true : accesAllowed = false
console.log(result);

