let circle = document.querySelector(".circle");
const audio = new Audio("ballsound.mp3")
let move = 10;
window.addEventListener("load" , ()=>{
    circle.style.position = "absolute";
    circle.style.left = 0;
    circle.style.top = 0;
});

window.addEventListener("keyup", (e)=>{
    switch(e.key){
        case "A" && "a":
            circle.style.left  = parseInt(circle.style.left) - move + "px";
            audio.play();
            break;
        case "D" && "d":
            circle.style.left  = parseInt(circle.style.left) + move + "px";
            audio.play();
            break;
        case "W" && "w":
            circle.style.top  = parseInt(circle.style.top) - move + "px";
            audio.play();
            break;
        case "S" && "s":
            circle.style.top  = parseInt(circle.style.top) + move + "px";
            audio.play();
            break;
    }
});