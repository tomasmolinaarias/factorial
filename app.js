
const factorial_user = prompt("danos un numero del 1 al 20", 1);
//----------------------------------------------------------------
//tabla de multiplicacion
// for (i = 1 ; i <= factorial_user ; i++){
// let resultado = factorial_user* i
// document.write([`${i} * ${factorial_user} = ${resultado} <br>`])
// }
//-------------------------------------------------------------------
//factorial
//intento1
// let proceso = factorial_user - 1;
// let factorial_final = factorial_user * proceso
// document.write(`el factorial es ${factorial_final}`) 
let res = factorial_user;
//ordenado
// for (let i = 1; i <= res; i++) { let res = 1;
//     for (let j= 1; j <= i; j++) {
//     res = res * j; }
//       document.write(`FACTORIAL DE ${i} ES : ${res} <br>` )
//     }

 //_---------------------------------------------------

let listo =function(){

  for (i = 1 ; i <= factorial_user ; i++){
    let resultado = factorial_user* i
    document.write([`${i} * ${factorial_user} = ${resultado} <br>`])
    }
  for (let i = 1; i <= res; i++) { let res = 1;
    for (let j= 1; j <= i; j++) {
    res = res * j; }
      document.write(`FACTORIAL DE ${i} ES : ${res} <br>` )
    }
    
}
listo()
