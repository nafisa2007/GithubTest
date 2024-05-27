// hozirgi vaqtni ifodalaydi

let vaqt = new Date()


function hozirgiVaqt(){
    return `${vaqt.getHours()}:${vaqt.getMinutes()}:${vaqt.getSeconds()}`
}

console.log(hozirgiVaqt()) 







                                //    1-qator
// bugungi sana va yilni ifodalaydi

let LL = new Date()

function sanaYil(){
    return `${LL.getDate()} may  ${LL.getFullYear()}`
}
console.log(sanaYil())





                            //    2-qator
// bu sana yil va vaqtni ifodalaydi

let LLL = new Date()

function sanaYilVaqt(){
    return `${LLL.getDate()}  may   ${LLL.getFullYear()}  ${LLL.getHours()} : ${LLL.getMinutes()}`
}
console.log(sanaYilVaqt())



                             
                                //    3-qator

let LLLL = new Date()

function sanaYilVaqtKun(){
    return `${LLLL.getDate()}  may   ${LLLL.getFullYear()}, Payshanba ${LLLL.getHours()} : ${LLLL.getMinutes()}`
}
console.log(sanaYilVaqtKun())



                                    //   4-qator 3 ning qisqartmasi

let llll = new Date()

function sanaYilVaqt_Kun(){
    return `${llll.getDate()}  may   ${llll.getFullYear()}, Pay ${llll.getHours()} : ${llll.getMinutes()}`
}
console.log(sanaYilVaqt_Kun())