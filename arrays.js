
//Acceder a un elemento dentro de un array 
let avengers = ["Hulk", "SpiderMan", "AntMan"];

console.log(avengers[0]);

//Declaración de array de una manera diferente 

let moderat = new Array();
moderat[0] = "Eating Books";
moderat[1] = "Eating foods";
moderat[2] = "Kandy"
console.log(moderat);

//Aquí eliminamos el último elemeneto del array con el metodo pop
moderat.pop();
console.log(moderat);

//Aqui podemos aññadir a nuestro array  tantos valores como querremos siempre separandolos por comas 
moderat.push("Xbox","Fifa");
console.log(moderat);

//Este metodo tampoco admite parametros, invierte el orden de los valores el metodo Reverse
moderat.reverse();
console.log(moderat);


//Este metodo ordena los elementos del arrary tal y como ordena los elementos de un ordenador el Metodo Sort
moderat.sort();
console.log(moderat);

//Este es un metodo especial, el comportameinto del mismo dependera de los parametrs que se le asignen
//El primer parametro es un numero que representa el indice desde el que tiene que empezar a modificar 
//la matriz,El segundo parametros es un numero que indica las cantidad de elementos que va a eliminar 
// o sustituir, por ello el valor 0 no representa nada en absoluto Este es el metodo Splice

moderat.splice(2,2);

console.log(moderat);

moderat.splice(2,2,'Ethereal');

console.log(moderat);

moderat.splice(2,2,'Ethereal','Ethereal Remix vol.1','Ethereal Remix vol.2');

console.log(moderat);

//Como parámetros se puede proporcionar a unshift() una serie de elementos separados por comas,
 //que se añaden al principio de la matriz.
 //Los índices se actualizan en consecuencia, y el método devuelve la nueva longitud.

 moderat.unshift('Reminder Remix vol.1','Reminder Remix vol.2')
 console.log(moderat);

 //Metodos que no modifican la matriz

    let moderatII = new Array();
        moderatII[0] = "The Mark";
        moderatII[1] = "Bad Kingdom";
        moderatII[2] = "Versions";
        moderatII[3] = "Milk";
        moderatII[4] = "Gita";
        moderatII[5] = "Damage Done";
        
        
    let moderatI = new Array();
        moderatI[0] = "Rusty nails";
        moderatI[1] = "Seanmonkey";
        moderatI[2] = "Nasty silence";
        moderatI[3] = "Berlin";

        //Metodo Concat lo que hace es que concatena un array con otro en este caso o varios
        //Arrays, pero modifica en nada los arrays, veamos un ejmeplo   

        let arraysConc = moderatI.concat(moderatII);
        console.log(arraysConc);


        //El método Join devuelve una mera cadena en la que los valores del array están separados por comas.
        // Sin embargo, se puede especificar una cadena que sirva como separador.

        moderatI.join('?');
        console.log(moderatI);

        // El metodo slice() extrae una coia de una seccion especificada de una matriz, 
        //aunque a diferencia de splice() no la modifica.
        //El primer elemento es el indice en elque empzamos a crear la copia y el segundo seria donde
        //acabaría la copia , recalcar que este ultimo no aparece ejemplo
        //Tambien si solo defino el indice y no pondria donde se acabaria por defecto
        //cogeria hasta el ultimo elemento de nuestro array
       
        let rodaja =  moderatI.slice(1,3);
        console.log(rodaja);


        //Tambien esta el metodo toString elcual este no admite parametros y que el resultado es u objeto String
        //con sus porpias propiedades y metodos ejemeplo 
        moderat.toString();
        console.log(moderat);

        //Localizar un valor en un array 
        //Por ultimo recorro dos metodos muy utiles para localizar valors en un array, Estos
        //se utilizan muchisimo 

        let piezas = ["Martillo","Figura","Sartenes","Vasos"];
        //Vaos a utilozar IndexOF que este devuelve el primer indice del primer elemento que 
        //coincida con el que indicamos , sino existe coincidencia devuelve -1:
        
        let figura =  piezas.indexOf("Figura");
        console.log(figura) ;


        let cuchara = piezas.indexOf("cuchara");
        console.log(cuchara);

        //lastIndexOf() devuelve el índice del ultimo elmeento que coincide con el parametro proporcionado
        //Sino coincide devuelve -1

        let ultimo = piezas.lastIndexOf("Vasos");
        console.log(ultimo);


        //Metodo includes()
        //Determina si una matriz incluye u determinado elmento, devuelve true o false segun corresponda

        const listNumbers = [1,2,3,4,5];
        let res = listNumbers.includes(3) ? true : false;
        console.log(res)






        