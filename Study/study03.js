//input Values


//Html에서 div, input, button 끌어오기
const loginForm = document.querySelector(".login-form");
                    //querySelector 사용할 때 대상이 id or class 인지 명확히 해줘야 한다 
const loginInput1 = loginForm.querySelector("input");
const loginButton1 = loginForm.querySelector("button");

/* 1. html에서 <div class ="login-form"> class를 찾았고
   2. 그 안에서 
   <input type="text" placeholder="당신의 이름은 무엇입니까?" />
   <button> Login </button> 찾음
*/

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

