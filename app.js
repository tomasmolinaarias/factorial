let factorial_user = prompt("danos un numero del 1 al 20", 1);
for (i = 1 ; i <= factorial_user ; i++){
let resultado = factorial_user* i
document.write([`${i} * ${factorial_user} = ${resultado} <br>`])
}
let proceso = factorial_user - 1;
let factorial_final = factorial_user * proceso
document.write(`el factorial es ${factorial_final}`) 
// function factoria(numero) {
//     if(numero*(numero-1)){
//     return resultado
//     console.log(`${resultado}`)
//     }

//  }
//  console.log(factoria(factorial_user))

