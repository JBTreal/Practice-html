const myContainer = document.getElementById("container");
const myButton = document.getElementById("mybutton");

function changeColor(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH";
}
function changecolor(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Wait N0";
}
function backColor(event){
    event.target.style.backgroundColor = "green";
    event.target.textContent= "Click Me";
}
myButton.addEventListener("click", changeColor);
myButton.addEventListener("mouseover", changecolor);
myButton.addEventListener("mouseout", backColor);