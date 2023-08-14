const title = document.querySelector("body");


function handleResize(){
    if(window.innerWidth <= 1000){
        title.style.backgroundColor = "red";
    } else if(window.innerWidth <= 700){
        title.style.backgroundColor = "blue";
    } else {
        title.style.backgroundColor = "black";
    }
};



window.addEventListener("resize", handleResize);