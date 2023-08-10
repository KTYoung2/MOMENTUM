//javascript에서 html element를 가져오는 법
const title = document.querySelector(".hello h1");



function handleClick() {
    title.style.color = "white";
};

function handleMouse(){
    title.innerText = "mouse is here";
};

function handleLeave() {
    title.innerText = "마우스 떠남요";
};


function handleResize(){
    document.body.style.backgroundColor = "tomato";
};

function handelCopy() {
    alert("뭘 뽀려가시나요?");
};


function handleOff(){
    alert("SOS!!!!");
};

function handleOn(){
    alert("Good");
};

title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleMouse);
title.addEventListener("mouseleave", handleLeave);


window.addEventListener("resize", handleResize);
window.addEventListener("copy", handelCopy);
window.addEventListener("offline", handleOff);
window.addEventListener("online", handleOn);