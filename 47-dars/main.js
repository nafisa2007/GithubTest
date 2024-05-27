// ..sort..

// let raqamlar = [1,89,46,49,39,54,678,45,95,82,15]

// console.log(raqamlar.sort())



// ..reverse..



// let tartibsiz_raqam = [45,56,946,5,5,68,893,854,]

// console.log(tartibsiz_raqam.reverse())




// ..filte..

let array = ["olma","uzum","anor","ananas","gilos"]

console.log(array)


let meva = prompt ("siz qaysi mevani chiqarib tashlamoqchisz")

let newArray = array.filter((value ,index, array)=>{
    return value !==meva
})

console.log(newArray)