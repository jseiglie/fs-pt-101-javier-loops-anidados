import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};



/*
push --> añade al final
pop  --> elimina el ultimo
unshift --> añade al principio
shift --> elimina el primero

slice ---> parametros -- desde, hasta--> devuelve un nuevo array con esa porcion  
splice ---> parametros -- desde, cuantos a eliminar? ---> modifica el array original
toSpliced --> parametros -- desde, cuantos a eliminar? ---> devuelve un nuevo array
*/


const arr = [1,0,2,34,5,8]
console.table(arr)
console.log(arr) // [1,0,2,34,5,8]
console.log(arr[0]) //1
console.log(arr[2]) //2
arr[1] = 10
console.table(arr)


// for of y for in
for (let index in arr) { // indices
  // console.log('for in', index)
  // console.log('for in', arr[index])
  console.log(`for in---> index=${index} arr[index] = ${arr[index]} `)
}
for (let val of arr) { // valores
  console.log('for of',val)
}

arr.forEach((val, index)=> {
  console.log(`forEach index=${index} y val=${val}`)
})

const testing = arr.map((val, index)=> {
  return `map index=${index} y val=${val}`
})
console.table(testing)


//reduce 
const initialValue = 0
const total = arr.reduce((a,b)=> a+b, initialValue)
console.log(total);


// [1,10,2,34,5,8]

const sorted = [...arr].sort((a,b)=> a-b)
console.log(arr)
console.log(sorted)
const reversed = [...sorted].reverse()
console.log(sorted)
console.log(reversed);

// loops anidados

// matriz cuadrada 

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.table(matrix)
console.log(matrix[0][0]) // 1
console.log(matrix[2][2]) // 9
console.log(matrix[1][1]) // 5
console.log(matrix[0][2]) // 3

// loop matriz cuadrada

for (let i in matrix) { // accede a los arrays hijos
  console.log('for in i--> ',i)
  console.log('for in matrix[i]--> ',matrix[i])
  for (let j in matrix[i]){
    console.log('for in j--> ',j)
    console.log('for in matrix[i][j]--> ',matrix[i][j]) 
  }
}
for (let i of matrix) { // accede a los arrays hijos
  console.log('for of i--> ', i);
  for (let j of i){
    console.log('for of j--> ', j) 
  }
}

matrix.forEach(arr=>{
  console.log('forEach arr --> ',arr)
  arr.forEach(num=> {
    console.log('forEach num -> ',num)
  })
})


const arra1 = [1,2,3,4,5,6]
const arra2 = ['a', 'b', 'c', 'd']
const arra3 = ['pepe', 'lola', 'maria']

for (let i in arra1) {
  for (let j in arra2) {
    for (let k in arra3) {
      console.log('for in' ,arra1[i]+arra2[j]+arra3[k])
    }
  }
}

for (let i of arra1) {
  for (let j of arra2) {
    for (let k of arra3) {

      console.log('for of... ',i+j+k)
    }
  }
}

arra1.forEach(i=> arra2.forEach(j=> arra3.forEach(k => console.log('forEaCh --> ',i+j+k))) )















let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let sustantivo = ['jogger', 'racoon', 'portales'];
  let dominios = ['es', 'com', 'io', 'net', 'us']
// OBLIGADO
// añadir un array nuevo de dominios (ej: ['es', 'com', 'io', 'net'])


/******************************
*                             *
*            EXTRA            *
*                             *
*******************************/
/*
1. si mi sustantivo es portales-->  thegreatportales.es XXXXX
                                    thegreatportal.es OOOOO
                                    lasOfUs.us
                                    lasOf.us

2. mostrarlo en el html
3. agruparlos en el html segun los dominios                                    
                                    
*/