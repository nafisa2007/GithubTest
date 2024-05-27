// let oy = ["mart","aprel","may"]

// for(let bahor of oy  ){
//     console.log(bahor)
// }


let data = [
    {
        rasmi : "<img src='https://kinoreporter.ru/wp-content/uploads/2022/07/Bambi.jpg'/img>",
        ismi:"Bembi",
        yoshi:7,
        hobbisi:"yugurish",
    },

    {
        rasmi : "<img src= 'https://files.worldwildlife.org/wwfcmsprod/images/pc_honorable_mention_lion_nat_hab_photo_contest_2017/magazine_small/8kd8qhz2do_Lion_King.jpg' ></img>",
        ismi : "lion",
        yoshi :30,
        hobbisi :"o'ljasini ovlash",
    },

    {
        rasmi : "<img src = 'https://247wallst.com/wp-content/uploads/2018/03/white-rabbit-close-up-square.jpg'></img>",
        ismi: "rebbit",
        yoshi :20,
        hobbisi: "sakrash",
    },
    {
        rasmi : "<img src= 'https://image.lexica.art/md2_webp/09334131-9db0-4c35-bcc7-c78a1179b079'></img>",
        ismi : "cat",
        yoshi : 12,
        hobbisi : "miyovlash",
    }

]


// for(let value of data){
//     for(let key in value){
//         document.write(`
//         <div class="wrapper"> ${value[key]} </div>
//         `)
//     }
// }


for(let value of data){
    document.write("<div class= 'card'>")
    for(let key in value){
        document.write(`
        <div class= "wrapper">${value[key]} </div>
        `)
    }
    document.write("</div>")
}