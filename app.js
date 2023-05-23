var burjkhalifa=document.getElementById("burjkhalifa");
var dubaitext=document.getElementById("dubaitext");
var stars=document.getElementById("stars");
var building=document.getElementById("building");


window.addEventListener("scroll",()=>{
    let value=window.scrollY;

    
    dubaitext.style.left=value * -1 + "px";
    burjkhalifa.style.top=value * 1 + "px";
    stars.style.top=value * 1 + "px";
    building.style.left=value * -0.1 + 'px';
})