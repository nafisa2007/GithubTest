// const degree = new Array();
// console.log("dastlabki holat: ",degree)

// let daraja = prompt("darajani kiriting")*1;

// for(let i=0; i<=daraja; i++){
//     degree.push(2**i)
// }

// console.log("to'ldirilgan holat",degree)


// let 


let array = []

document.querySelector("button").addEventListener("click", ()=>{
    let a = document.querySelector(".first").value*1;
    let d = document.querySelector(".second").value*1;
    let n = document.querySelector(".thrid").value*1;

        for(let i=0; i<=n; i++){
            array.push(a+(i*d))
        }

    document.querySelector(".text").innerHTML ="[" + array.toString() + "]"

   


} , {once:"true"})