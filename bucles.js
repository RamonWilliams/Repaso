  //Bucles For tradicional
const numbers = [10,11,12,13,14,15,29 ];

for(index = 0; index <= numbers.length; index++){
    if(numbers[index] == 13){
        console.log("Esa conmigo no")
    }
}
const alumnos = [    
   {
       name:"Ramon",
       lastname:"Rodriguez",
       age:29,
       tecnologies:["Html","CSS"]
   },

   {
       name:"Williams",
       lastname:"Hernández",
       age:29,
       tecnologies:["Js","Node"]
   }

];


 for(r = 0; r < alumnos.length; r++){
   for(w = 0; w < alumnos[r].tecnologies.length;w ++){
       console.log(alumnos[r].name + " " + alumnos[r].tecnologies[1])
   }
 }



 // Bucle ForEach

 const colors = ["verde", "azul","rojo","negro"];
 const numbers2 = [1,2,3,5,6];

 colors.forEach((color) =>{
    console.log(color)
 });


 numbers2.forEach((number) =>{
     console.log(number)
 })


 //Bucle for of
 //Este Itera a Arrays, Strings, Arguments, objetos etc


 //ejemplo Arrays
 var ninjaTurtles = ['Leonardo', 'Michelangelo', 'Donatello', 'Raphael'];

 for(ninjaTurtle of ninjaTurtles){
     console.log(ninjaTurtle)
 }


 //ejemplo Strings
 
 let name = "Ramón Williams";

 for(letter of name){
     console.log(letter)
 }

 //Ejemplos con Objetos 

 var powerRangers = new Set();//esta sintaxis es que estoy asignando la variable a un objeto 
     powerRangers.add(1);
     powerRangers.add("Red");
     powerRangers.add("1.80")
     
     for( ranger of powerRangers){
         console.log(ranger)
     };








     


