const oprator = document.querySelector("#eval")
const total = document.querySelector("#tot")
let arr = []
// console.log(oprator)

const getval = (e)=>{
    // console.log(e.value)
    arr.push(e.value)
    oprator.value=arr.join("")
}


const equalto = (e) =>{
    total.value = eval(arr.join(""))
}
const dell = (e) =>{
    arr.pop();
    oprator.value=arr.join("")

}

const cleard =(e)=>{
    oprator.value='';
    arr=[];
    total.value =""
}