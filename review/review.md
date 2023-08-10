1.javascript on the browser

html의 elements들은 javascript를 통해 변경하고 읽을 수 있음.
document는 브라우저에 이미 존재하는 object,
개발자가 접근할 수 있는 html을 가리키는 객체임.

document.title = 'TITLE IS JS";

document통해 javascript에서 이런식으로 html에 접근, 변경도 가능함.

1.html element id, className 부여
<h1 id="title"> Grab me! </h1>

2. javascript에서 html element를 가져오기 
const 변수명 = document.getElementById("html id name");


-div 안에 있는<h1>가져오기. 

    <div class="hello">  
        <h1>Grab me!</h1>
    </div>


const title = document.querySelector(".hello h1");

 document.querySelector()
 element를 css 방식으로 검색할 수 있음. 
 querySelector는 오직 첫번째 element만 가져옴 !!
조건에 맞는 모든 element를 가져오고 싶다면 querySelectorAll()




-event

1.html에서 element 가져오기
const title = document.querySelector(".hello h1");

3.function 함수 만들기
function handleClick() {
    title.style.color = "white";
};

2.변수.addEventListener("event", event가 실행할 function );
title.addEventListener("click", handleClick);



function handleClick() {
    title.style.color = "white";
};

function handleMouse(){
    title.innerText = "mouse is here";
};

function handleLeave() {
    title.innerText = "마우스 떠남요";
};

title.addEventListener("click", handleClick);
title.onClick = handleClick; 이런식으로도 가능 ~
title.addEventListener("mouseenter", handleMouse);
title.addEventListener("mouseleave", handleLeave);


-window event
js처럼 window에서도 제공하는 event들이 있음
근데js처럼 element 접근할 수 없고 document.이렇게 접근해야함

function handleResize(){
    document.body.style.backgroundColor = "tomato";
};


window.addEventListener("resize", handleResize);


