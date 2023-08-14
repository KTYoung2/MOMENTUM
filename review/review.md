
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









//javascript에서 html element를 가져오는 법
const title = document.querySelector(".hello h1");



//elememts에서 class name을 변경, 제거, 추가. 
기본적인 효과(색변경, 스타일 등등)은 css에서 하고 동작하는 걸 js에서 조작하기 !
function handleClick() {
    //오류방지 string 변수에 저장하기 
    const clickedClass = "clicked";
                        (css className)
    //js로 html class name 추가하기
    if(title.className === clickedClass){
        title.className = "";
    } else {
        title.className = clickedClass;
    }

};


title.addEventListener("click", handleClick);





 

- classList 

: element의 class 내용물을 조작하는 것을 허용한다.

html class name이 부여된 element에 js에서 다른 className을 
추가하고 싶다면? (기존의 html 클래스가 사라지않게하기)

<div class="hello">  
        <h1 class="sexy-font">Click ME !</h1>
    </div>

function handleClick() {
    const clickedClass = "clicked";
    //만약 타이틀 클레스 네임에 "clicked"가 포함이 되어 있다면
    if(title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass);
        타이틀 클레스네임 "clicked" 지우고 
    } else {
        title.classList.add(clickedClass);
    } 아니라면 타이틀 클레스 네임에 "clicked"를 추가해라

};


하지만, 이것도 더욱 편리하게 만들 수 있다.
바로바로 toggle 메소드를 이용하는 것!!!!!!

classList - toggle
toggle은 클래스의 유무를 체크해서 없으면 add, 있으면 remove를 자동으로 시켜준다.


function handleClick() {
    title.classList.toggle("clicked");
};





classList - Methods

add(String)
지정한 클래스 값을 추가한다.
만약 추가하려는 클래스가 이미 존재한다면 무시.
 

remove(String)
지정한 클래스 값을 제거한다.
존재하지 않는 클래스라면? 에러 발생 X
 

contains(String)
지정한 클래스 값이 존재하는지 확인.
true, false 값을 반환.
 

replace(old, new)
old class를 new class로 대체
 

item(Number)
인덱스 값을 활용하여 클래스 값을 반환


//login

-유저 정보 받아내고 저장하기



const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");



function handleLoginBtn () {
    //.value input에 입력된 값을 가져오는 프로퍼티
    const username = loginInput.value;
    if(username === ""){
        alert("이름적어");
        //.length => String 길이 구하는 프로퍼티
    } else if(username.length > 15) {
        alert("이름 길어");
    }
};


loginBtn.addEventListener("click", handleLoginBtn);

js로 user 유효성 검사를 해줄 수 있지만, html에서도 가능하니
1차적으로 그냥 html에서 설정해주는 것이 편함

   <form id="login-form">    
        <input required 
               maxlength="15" 
               type="text" 
               placeholder="what's your name" />
        <input type="submit" value="Log in">
    </form>

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");



1. 유저정보 받아내기


/*

addEventListener의 function의 
\function onLoginSubmit (event)=> 첫번째 인자에는 
발생된 event의 대한 정보를 제공해줌.js에서 ! 
그래서 나는 그 정보를 받아올 공간만 만들어주면 된다.

*/

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit (event) {
    //preventDefault() event의 디폴트 행동이 발생되지 않도록 막는것.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};


/*
    html form안에 있는 input submit은 자동으로 새로고침 되기 떄문에
    유저 네임을 받자마자 저장하기 어려움. 때문에 click event가 아니라 
    "submit"을 멈추는 event 필요함. (엔터를 누르거나, 버튼을 클릭할 떄 발생)
*/

loginForm.addEventListener("submit", onLoginSubmit);


2.유저네임 저장, view

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    //preventDefault() event의 디폴트 행동이 발생되지 않도록 막는것.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    /*localStorage => 브라우저에서 제공해주는 걍 작은 db라고 생각하면됨.
        저장하기 .setItem("key", value);
    */
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};



/*
    html form안에 있는 input submit은 자동으로 새로고침 되기 떄문에
    유저 네임을 받자마자 저장하기 어려움. 때문에 click event가 아니라 
    "submit"을 멈추는 event 필요함. (엔터를 누르거나, 버튼을 클릭할 떄 발생)
*/


//유저 네임 유무 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${savedUsername}`;
}