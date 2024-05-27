// let son = 5.8

// console.log(Math.trunc(son))

// console.log(Math.floor(son))

// console.log(Math.s(son))




// let ismlar = ["ism1","ism2","ism3","ism4","ism5"]

// i=0
// let ismlar = ()=>{
//     console.log("ismlar"+i)
//     i++
//     if(i===10){
//         clearInterval(interval)
//     }
// }
// let interval = setInterval(ismlar,1000)




// let harf = ["a","b","c","d","e","f","g"]
// console.log("harf"+i)
//     i++
//     if(i===10){
//         clearInterval(interval)
//     }




let array = ["a","b","c","d","e","f","g","h"]; 

let count = 10; 

let interval = setInterval(() => {
  array.push(`array${count}`); 
  console.log("array" `array${count}`);
  count++; 
  if (count === 10) { 
    clearInterval(interval); 
    console.log();
  }
}, 1000); 