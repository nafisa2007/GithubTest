// let element = document.querySelector("p")

// center = document.querySelector(".center")
// left = document.querySelector(".left")
// right = document.querySelector(".right")

// center.addEventListener('click',()=>{
//     // alert("center")
//     element.setAttribute("align","center")
// })

// center.addEventListener('click',()=>{
//     // alert("left")
//     element.setAttribute("align","left")

// })

// center.addEventListener('click',()=>{
//     // alert("right")
//     element.setAttribute("align","right")
// })









function getR(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function crElement(son) {
    let div = document.createElement("div")
    div.innerHTML = son
    div.style.textAlign = "center"
    div.style.lineHeight = "100px"
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.border = "1px solid black"
    div.style.display = "inline-block"
    div.style.backgroundColor = "rgb" + "(" + getR(100, 256) + "," + getR(100,256) + "," + getR(100, 256) + ")"
    div.style.color = "rgb" + "(" + getR(0, 100) + "," + getR(0,100) + "," + getR(0, 100) + ")"
    div.style.fontSize = getR(10, 30) + "px"
    div.style.fontFamily = "Verdana"
    document.querySelector(".container").appendChild(div)
    
}


center = document.querySelector(".center")
right = document.querySelector(".right")
left = document.querySelector(".left")
let i = 0
center.addEventListener('click', ()=>{
    crElement(i)
    i++
})


right.addEventListener('click', () => {
    // alert("Right")
    element.setAttribute("align", "right")
})

left.addEventListener('click', () => {
    // alert("Left")
    element.setAttribute("align", "left")
})