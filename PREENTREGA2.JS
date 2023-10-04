console.log("Bienvenidos a la escuela tecnica N°8, Bernal");
alert("Bienvenidos a la escuela tecnica N°8, Bernal");
let numeros

do {
    const input = prompt("Ingresar un número");
    numeros = parseInt(input);
  
    if (isNaN(numeros)) {
      console.log("Error: Debes ingresar un número.");
    }
  } while (isNaN(numeros));
  
  console.log("Número ingresado:", numeros);

do {
    nombreyapellido = prompt("Ingresar su nombre y apellido");
    if (!isNaN(parseFloat(nombreyapellido))) {
      alert("Error: Debes ingresar solo texto para el apellido.");
    }
  } while (!isNaN(parseFloat(nombreyapellido)));
 
alert("Usded ingreso:  " + nombreyapellido)  

let ciclo = prompt("ingrese el su curso, SUPERIOR o BASICO").toUpperCase();
   
if (ciclo === "SUPERIOR"){
    alert("usd cursa a la mañana")
} else if (ciclo ===""){
    alert("por favor ingrese su ciclo, superio o basico")
} else if (ciclo ==="BASICO"){
    alert("usted cursa por la tarde ")
}


let entrada = prompt("Ingrese la materia que debe rendir \nA: Matematicas \nB: Lengua \nX: Salir").toUpperCase();

while(entrada != 'X'){
   switch (entrada) {
       case "A":
            alert("Fecha de examen, Matematicas: 21/9/2023");
            break;
        case "B":
            alert("Fecha de examen, Lengua: 28/09/2023");
            break;
        case "X":
            alert('Hasta luego')
            break
       default:
        entrada = prompt("Ingrese la materia que debe rendir \nA: Matematicas \nB: LENGUA \nx: Salir").toUpperCase();
           continue
        
   }
   entrada='X'
}


let iva = 1.21

function Alumnos (pesos,apellido,nombre){
    this.pesos =pesos;
    this.apellido=apellido;
    this.nombre=nombre;
    this.CuotaconIVA= function(){
         return this.pesos * iva    

    }
    this.cuota=function(){ 
        alert (`HOla, alumno ${this.apellido} usted debe $ ${this.pesos} que esta por vencer hoy!!`)
    }

}
const Alumnos1 = new Alumnos(123,"Perez","juan")
const Alumnos2 = new Alumnos(124,"Roman","Ana")
const Alumnos3 = new Alumnos(125,"Lopez","Pedro")

alert(Alumnos1.apellido)
Alumnos1.cuota()
alert("su cuota mas iva es igual a : $" + Math.ceil (Alumnos1.CuotaconIVA())) //uso del math para redondeo
/*
for (const alumonox in Alumnos1){
    alert(Alumnos1[alumonox]);
}
*/

 
class Grados {
    constructor(primero, segundo, tercero) {
      this.primero = primero;
      this.segundo = segundo;
      this.tercero = tercero;
    }
  
    // Método para determinar el grado
    determinarGrado() {
      if (this.primero) {
        return "El alumno está en primaria.";
      } else if (this.segundo) {
        return "El alumno está en secundaria.";
      } else if (this.tercero) {
        return "El alumno está en terciario.";
      } else {
        return "No se puede determinar el grado.";
      }
    }
  }
  
  // Crear una instancia de Grados
  const Grado1 = new Grados(true, false, false); // El alumno está en primaria
  
  // Llamar al método para determinar el grado y mostrarlo en consola
  alert(Grado1.determinarGrado());

//  arrancamos la clase 8 array
alert("Estos son los talleres basicos")

let miArray = ["talle1 ","taller2 ", "taller3 ",3 ] //empieza a contar desde cero-0 y los string E/""
alert(miArray[2])

let cantidadeTaller = miArray[3]
alert(cantidadeTaller)
 for (let i =0; i < 4;i++){
    alert(miArray[i]);
 }
/*
 for (let i = 0; i <= miArray.length;i++) {//me muestra la cantidad de elementos
      alert(miArray)
 } 
*/
alert("Este es un taller opcional el 4")
 miArray.push(" taller 4")
 alert(miArray)
 alert(miArray)
alert(" Estos son los alumnos Desaprobados, para rendir Previas")
 const Ests=[ {año: 1, estudiante:"Marcela"},{año: 2, estudiante:"Toni"},{año:3, estudiante:"May"}];

for (const i of Ests){
    alert(i.año);
    alert(i.estudiante);
}
//ejecuta una funcion para cada elemento de mi array
alert("Para reclamos se puede dirigir con: ")
const directivos  =["directora Ana ", "vice Juan ", "secretaria Romina"]
directivos.forEach(
    function(x){
        alert("Estos son los nombres de los directivos: " + x.toUpperCase())
    }
)


const numero =[0,1,2,3,4]
const doble = numero.map(   // la funcion map multiplica mi ARRAY 
    function(x){
        return x*2
    }
)
alert("si pagas en estas fechas: "+ numero)

alert("Tienes un descuento de: $ "+ doble)
/*

const numero2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(function(x) {
  return x % 2 === 0;
});

console.log("Números pares:", numerosPares);

*/

// cosas utiles para tener en cuenta yanet
// parseos del prompt
// ParseInt => numeros enteros
// ParseFloat => numeros con decimal
// Number => abarca ambos parseos
// atajos de teclado
// ctrl alt flecha para abajo o para arriba => selecciona varios renglones
// toLowerCase() => pasa todo a minúscula
// toUpperCase() => pasa todo a mayúscula 
// ctrl }    o     ctl k c => esto es para comentar S