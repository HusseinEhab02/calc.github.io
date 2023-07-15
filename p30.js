let calcEl=document.querySelector(".calculator")
let resEl=document.querySelector(".result")
let clearEl=document.querySelector(".clear")
let inpEl=document.querySelector("input")
let buttonsEl = document.querySelectorAll("button")
for(let i=0;i<buttonsEl.length;i++){
    buttonsEl[i].addEventListener("click" ,() => {
        const btnvalue = buttonsEl[i].innerText
        if(btnvalue==="c"){
            clearres()
        }
        else if(btnvalue==="=")
        {
            calcres()
        }
        else{
            appValue(btnvalue)
        }
    })
}





// 
function clearres(btnvalue){
    inpEl.value=" "
    console.log(btnvalue)
}
// 
function calcres(){
inpEl.value = eval(inpEl.value)
// eval() is a function for calculation
// eval(2*8) = 16 as example
}
// 
function appValue(btnvalue){
    inpEl.value+=btnvalue
    // one = only
    // += allows writing as much numbers
    // the same fuction can be used to remove last number 
}