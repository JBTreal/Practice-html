const myBox =document.getElementById("myBox");
const moveAmount = 10;
let x =0;
let y =0;

//myBox.addEventListener("click", event =>{
   // if(myBox.style.visibility === "hidden"){
        //myBox.style.visibility = "block";
   //}
   //else{
        //myBox.style.visibility = "hidden";
        //myBox.textContent = "S";
    //}
//});

document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -=moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;    
        }   
    myBox.style.top= `${y}px`;
    myBox.style.left = `${x}px`;
    }
});

