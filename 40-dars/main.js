//  function expression

// const noutbuk = function(funksiya2){
//     alert(funksiya2)
// }
// noutbuk(funksiya2)



// // declaration
// function lenovo(){
//     console.log("salom")
// }


let qator = prompt("qatorni kiriting")*1;
let ustun = prompt("ustunni kiriting")*1;

let table = document.querySelector("table");

function createTable(rov,col){
    for(let i=1; i<=rov; i++){
        table.innerHTML +="<tr></tr>"

        for(let j=1; j<=col; j++){
            let tr = document.querySelectorAll("tr")
            tr[tr.length-1].innerHTML +="<td></td>"
        }
        }
}

createTable(qator,ustun)



// let name = "ilya";
// alert(`hello ${1}`);
// alert(`hello ${"name"}`);
// alert(`hello ${name}`);