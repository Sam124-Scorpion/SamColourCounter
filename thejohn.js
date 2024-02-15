const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const valueChange = document.getElementById("h1t");
const backColor = document.getElementById("jumi");
count = 0 ;
increase.onclick = function(){
    count++ ; 
    valueChange.textContent = count;
   backColor.style.backgroundColor = "red" ; 
}
decrease.onclick = function(){
    count-- ; 
    valueChange.textContent = count;
    backColor.style.backgroundColor = "green" ;
}
reset.onclick = function(){
    count = 0 ; 
    valueChange.textContent = count;
    backColor.style.backgroundColor = "orange"
}