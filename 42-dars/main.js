// const mevalar = ["olma","nok",""]
// for(let index = 0; index<mevalar.length;)

const meva = ["🍎","🥑","🍍","🍏","🫐","🫒","🍓","🍐","🍋"]
// let son1 = prompt("mevalar soni")*1;

// for (let i = 0; i < soni; i++){
//     let fruit = prompt("mevani kiriting")
//     meva[i]= fruit
// }

// console.log(meva)

for (let index = 0;index < meva.length; index++){
    document.querySelector(".wrapper").innerHTML+=`<div class="likop">
    ${meva[index]}
    </div>`
}


