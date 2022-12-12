//html in javascript 아주 중요한 개념 !
const title = document.getElementById("title");

title.innerText = "hahahahaha ! ";

//className 

const hello = document.getElementsByClassName("hi");
//html에 지정해 놓은 ClassName과 동일해야함

console.log(hello);



//div 안에 있는 h1 가져오기

const title = document.getElementsByTagName("h1");

console.log(h1);


//querySelector

const selector = document.querySelector(".title h1");
                                    // .className, tag 명시

//javascript에서 스타일 변경

selector.style.color= "white";

// 사용 가능 event 보기 
console.dir(selector); 


//event (click event)
function titleClick() {
    selector.style.color = "white";
}

//event (mouse event)
function mouseEnter() {
    selector.innerText = "mouse is here ~";
}

function mouseLeave() {
   selector.innerText = "mouse is gond :( ";
}

selector.addEventListener("click", titleClick); 
//html element 가져와 .addEventListener function 실행 (어떤 event를 듣고 싶은지 명시); 
//js에게 function만 넘겨주고 유저가 click할 경우 js가 실행 버튼을 대신 눌러주길 바라는 것 
selector.addEventListener("mouseenter", mouseEnter)
selector.addEventListener("mouseleave", mouseLeave)

//more events

selector.onclick = titleClick;
//selector.addEventListener("click", titleClick);  -> 이런식으로도 사용 가능 

//window element event 

function windowResize() {
    document.body.style.backgroundColor = "yellow";
}

function windowCopy() {
    alert("copier !");
}

function windowOffline () {
    alert (" NO wifi :( ");
}

function windowOnline () {
    alert (" GOOD ! "); 
}

//(resize event)
window.addEventListener("resize", windowResize);
//copy event
window.addEventListener("copy" , windowCopy);

// wifi event 
window.addEventListener("offline" , windowOffline);
window.addEventListener("online" , windowOnline);
