// 1-misol
// let son = 0.5
// var son1 = 0.3 + 0.2
// console.log(son==son1)


// 2-misol
// let son = 2
// let satr = ""
// while (son != infinity){
//     son=son+son
//     satr+=son+'<br/>'
// }
// document.write(satr)


// random

// console.log(parseInt(Math.random()*100))




const arr = [
   `<img class="qogoz" src="./photo/Rock-paper-scissors_(paper).png" alt="rasm">`,
    `<img class="tosh" src="./photo/Rock-paper-scissors_(rock).png" alt="rasm">`,
    `<img class="qaychi" src="./photo/Rock-paper-scissors_(scissors).png" alt="rasm">`
]


document.write(arr[Math.trunc(Math.random()*arr.length)])