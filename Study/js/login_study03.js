//input Values
/*
//Html에서 div, input, button 끌어오기
const loginForm = document.querySelector(".login-form");
                    //querySelector 사용할 때 대상이 id or class 인지 명확히 해줘야 한다 
const loginInput1 = loginForm.querySelector("input");
const loginButton1 = loginForm.querySelector("button");

/* 1. html에서 <div class ="login-form"> class를 찾았고
   2. 그 안에서 
   <input type="text" placeholder="당신의 이름은 무엇입니까?" />
   <button> Login </button> 찾음


// 코드 간편화
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

//button에 event 설정, user name (값)유효성 검사 
function loginBtnClick(){
    const userName = loginInput.value;
    if(userName === ""){
        alert("Plese write your name");
    } else if (userName.length > 15) {
                    //.length String 길이 구하는 함수
        alert("Your name is too long");
    } else {
        alert("Welcom to my App");
    }
}

loginButton.addEventListener("click", loginBtnClick);
*/


//event
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
//별로 중요하지 않거나, string만 담고 싶을 때 대문자
const USERNAME_KEY = "username";
//username 반복되고 있으니 변수에 담아주자. 

/*
//뭐가 클릭됐는지, 어디가 클릭됐는지 등 정보를 알고 싶을 때 동작을 멈춰야할 때가 종종 있음. 
function linkClick(event){
         // function이 하나의 argument를 받도록 하고 그걸 js에게 넘겨주는 것 
                공간을 만들어주면 js에서 알아서 event를 채워줄 거임(이건 브라우저가 해주는 일임)
         
    event.preventDefault();
            // a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행되는데,
                preventDefault 를 통해 이러한 동작을 막아줄 수 있음. 
}

link.addEventListener("click", linkClick)
*/


// form을 submit할 때 입력값(username) 받아내기 (클릭이 아닌 submit 감지)
//새로고침이 일어나는 건 form submit 기본동작
function loginSub(event){   
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //username 저장 (localStorge) : 브라우저 API (작은 DB라고 생각)
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

//코드 반복되니 함수화시킴
function paintGreetings(username){
    greeting.innerText = `Have a Nice Today
                          ${username} 👋`;
                    /* `${변수명}` 1.변수와 string을 결합하고 싶을때
                                   2.변수를 string 안에 집어넣고 싶을 때
                                   ※ '' 싱글코트가 아닌 `` 백틱 기호임  */    
    
         greeting.classList.remove(HIDDEN_CLASSNAME);
}


//유저 정보 유무 확인
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    // 그대로 form 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    /*"submit"은 엔터를 누르거나 버튼을 클릭할 때 발생 !
    submit event가 발생하면 브라우저가 알아서 function loginSub() 실행해줌
        */
    loginForm.addEventListener("submit",loginSub);
} else{
    //회원 정보를 기억한채 h1 환영문구 보여주기 
    paintGreetings(savedUserName);
                // 함수를 호출하는 위치에따라 유저정보(Argument) 바꿔주기
}
            