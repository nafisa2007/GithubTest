// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.splice(2, 0, "Lemon", "Kiwi"))


let savat1 = ["🍎","🥑","🍍","🍏","🫐","🫒","🍓","🍐","🍋"]
let savat2 = []


document.querySelector(".savat1").innerHTML = savat1.join("")
document.querySelector(".savat2").innerHTML = savat2.join("")

document.querySelector(".rigt").addEventListener("click",() =>{
    if(savat1.length >0){
        savat2.push(savat1.pop())
        document.querySelector("savat1").innerHTML = savat1.join("")
        document.querySelector("savat2").innerHTML = savat2.join("")
        document.querySelector("left").removeAttribute("disabled")

    }else{
        document.querySelector(".rigt").setAttribute("disabled", "")
    }
})

document.querySelector(".left").addEventListener("click",()=>{
    if(savat2.length>0){
        savat1.push(savat2.pop())
        document.querySelector("savat1").innerHTML = savat1.join("")
        document.querySelector("savat2").innerHTML = savat2.join("")
        document.querySelector("rigt").removeAttribute("disabled")
    }else{
        document.querySelector(".left").setAttribute("disabled", "")

    }
})