// let element = document.querySelectorAll(".name");
// element.forEach((value,index)=>{
//     setInterval(()=>{
//         value.style.backgroundColor = "yellow"
//         value.style.color = "red"
//         value.innerHTML = "Nelly Jones"
//     },1000*index)
// })

// document.write(element[Math.trunc(Math.random()*color)])


let arrClass = Array.from(document.getElementsByClassName("box"))
 let deg = 0;
 setInterval(()=>{
    deg+=6
    arrClass[0].style.transform = `rotate(${deg}deg)`
 },59000)



 let arr_Class = Array.from(document.getElementsByClassName("box3"))
 let dEg = 0;
 setInterval(()=>{  
    dEg+=6
    arr_Class[0].style.transform = `rotate(${dEg}dEg)`
 },1000)