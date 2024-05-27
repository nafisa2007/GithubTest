// 1-misol

// const array = ["gilos","olma","olxori","avakado"]

// let [meva1,...others]=array

// console.log(others)



// 2-misol


// let obj = {
//     ism:"Nafisa",
//     age:17,
//     job:"coder"
// }

// let {ism ,age ,job,} = obj
// console.log(ism)

// const getData = ({ism,age,job})=>{
//     console.log(ism,age,job)
// }





// 3-misol
// let data = [
//     ism:"Demir",yoshi:18
// ]


// vaqtni korsatib turadi

// setInterval(()=>{
//     let vaqt = new Date()
//     document.querySelector(".vaqt").innerHTML = `Hozirgi vaqt <br>
//     ${vaqt.getHours()} : ${vaqt.getMinutes()}:${vaqt.getSeconds()}
//     `
// },1000)



// let vaqt = new Date()

// function hozirgiVaqt(symbol){
// return  `${vaqt.getDate}`
// }


// vazifa

let vaqt = new Date()

console.log(vaqt.getTime())
console.log(vaqt.getFullYear())
console.log(vaqt.getMonth()+1)
console.log(vaqt.getHours())
console.log(vaqt.getMinutes())
console.log(vaqt.getSeconds())
console.log(vaqt.getMilliseconds())
console.log(vaqt.getDay())
console.log(vaqt.getDate())

setInterval(()=>{

let vaqt = new Date()
    document.querySelector(".vaqt").innerHTML = `Hozirgi vaqt <br>
    ${vaqt.getHours()} : ${vaqt.getMinutes()} : ${vaqt.getSeconds()}

`
},1000)



