
const h1 = document.querySelector(".hello h1");


//html에서 설정한 clssName에 js className 추가하기
function handleTitleClick(){
   const clickedClass = "clicked";
   h1.classList.toggle(clickedClass);
      /* ---> toggle이란 html element h1의 classList에 "clicked" className이 있는지 
             확인한 후  있다면  clicked remove 없다면 clicked add  
      */
}


h1.addEventListener("click", handleTitleClick);


// 4.0~ 4.1

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
//document처럼 loginForm 안에 있는 html element 바로 가져올 수 있음. 


//user 입력값 유효성 확인
function handleLoginBtn() {
    const userName =loginInput.value;
    if(userName === ""){
        alert("Please write your name");
    } else if(userName.length >= 15){
        //.length => string 길이 구하는 함수
        alert("Your name is too Long");
    }
};

//=====> js만으로 작업해야한다면 필요하겠지만, 브라우저와html에서 제공하는 기능이 있으니 그걸 먼저 활용할것!