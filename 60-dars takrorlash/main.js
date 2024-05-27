document.addEventListener("keyup",(e)=>{
    if(e.key==="a"){
        document.body.style.background = "white"
        document.querySelector(".button_a").style.color = "aqua"
        document.querySelector(".button_j").style.color = "green"
        document.querySelector(".button_h").style.color = "green"
        document.querySelector(".button_g").style.color = "green"
        document.querySelector(".button_f").style.color = "green"
        document.querySelector(".button_d").style.color = "green"
        document.querySelector(".button_s").style.color = "green"
        audio = new Audio("./mp3/do.mp3")
        audio.play()

    }

    if(e.key==="s"){
        document.body.style.background = "black"
        document.querySelector(".button_s").style.color = "aqua"
        document.querySelector(".button_j").style.color = "green"
        document.querySelector(".button_h").style.color = "green"
        document.querySelector(".button_g").style.color = "green"
        document.querySelector(".button_f").style.color = "green"
        document.querySelector(".button_d").style.color = "green"
        document.querySelector(".button_a").style.color = "green"
        audio = new Audio("./mp3/re.mp3")
        audio.play()
    }
    if(e.key==="d"){
        document.body.style.background = "white"
        document.querySelector(".button_d").style.color = "aqua"
        document.querySelector(".button_j").style.color = "green"
        document.querySelector(".button_h").style.color = "green"
        document.querySelector(".button_g").style.color = "green"
        document.querySelector(".button_f").style.color = "green"
        document.querySelector(".button_a").style.color = "green"
        document.querySelector(".button_s").style.color = "green"
        audio = new Audio("./mp3/mi.mp3")
        audio.play()
    }

    if(e.key==="f"){
        document.body.style.background = "black"
        document.querySelector(".button_f").style.color = "aqua"
        document.querySelector(".button_j").style.color = "green"
        document.querySelector(".button_h").style.color = "green"
        document.querySelector(".button_g").style.color = "green"
        document.querySelector(".button_a").style.color = "green"
        document.querySelector(".button_d").style.color = "green"
        document.querySelector(".button_s").style.color = "green"
        audio = new Audio("./mp3/fa.mp3")
        audio.play()
    }
    if(e.key==="g"){
        document.body.style.background = "white"
        document.querySelector(".button_g").style.color = "aqua"
        document.querySelector(".button_j").style.color = "green"
        document.querySelector(".button_h").style.color = "green"
        document.querySelector(".button_a").style.color = "green"
        document.querySelector(".button_f").style.color = "green"
        document.querySelector(".button_d").style.color = "green"
        document.querySelector(".button_s").style.color = "green"
        audio = new Audio("./mp3/sol.mp3")
        audio.play()
       
    }
    if(e.key==="h"){
        document.body.style.background = "black"
        document.querySelector(".button_h").style.color = "aqua"
        document.querySelector(".button_j").style.color = "green"
        document.querySelector(".button_a").style.color = "green"
        document.querySelector(".button_g").style.color = "green"
        document.querySelector(".button_f").style.color = "green"
        document.querySelector(".button_d").style.color = "green"
        document.querySelector(".button_s").style.color = "green"
        audio = new Audio("./mp3/lja.mp3")
        audio.play()
    }

    if(e.key==="j"){
        document.body.style.background = "white"
        document.querySelector(".button_j").style.color = "aqua"
        document.querySelector(".button_a").style.color = "green"
        document.querySelector(".button_h").style.color = "green"
        document.querySelector(".button_g").style.color = "green"
        document.querySelector(".button_f").style.color = "green"
        document.querySelector(".button_d").style.color = "green"
        document.querySelector(".button_s").style.color = "green"
        audio = new Audio("./mp3/si.mp3")
        audio.play()
    }
})









// document.addEventListener("keyup",(e)=>{
//     if(e.key==="a"){
//         document.body.style.background = "yellow"
//     }

//     if(e.key==="s"){
//         document.body.style.background = "green"
//     }
//     if(e.key==="d"){
//         document.body.style.background = "red"
//     }
// })

// document.body.addEventListener('keyup',(e)=>{
//     if(e.keyCode==8){
//         ourText = document.querySelector(".list").innerHTML

//         ourText = ourText.slice(0,ourText.length-1)

//         document.querySelector(".list").innerHTML = ourText
//     }
//     else if(e.key.length>1){

//     }
//     else{
//         document.querySelector("list").innerHTML+=e.key
//         console.log (e.key)
//     }
// })