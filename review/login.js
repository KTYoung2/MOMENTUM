const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//반복되는 string 변수만들기 (오타나기 쉬워서!)


function onLoginSub(event) {
    //모든 EventListener function의 첫번째 인자(argument)는 항상 지금 발생한 이벤트에 대한 (js가 주는)정보가 될것임.
    event.preventDefault();
        /*preventDefault(); -> submit은 발생과 동시에 새로고침이 일어나니, 
          그것을 멈추기 위해 사용.(브라우저의 기본동작 멈춤)
          why? user 정보를 받고 저장하기 위해 !
        */
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //user정보 저장후 hidden loginForm 숨기기. 
    const userName = loginInput.value;
    //user정보 userName 변수에 저장
    localStorage.setItem(USERNAME_KEY , userName);
    /* user정보 받아서 저장하기. 
    localStorage -> window 브라우저에서 제공하는 작은 db 
    setItem(key,value)
    */
    paintingGreeting(userName);
};

//반복되는 코드 함수화 
function paintingGreeting(username){
    greeting.innerText = ` Hello ${username}`;
     //저장된 user정보 h1에 추가하기. 
                        /* `${변수명}` 1.변수와 string을 결합하고 싶을때
                                      2.변수를 string 안에 집어넣고 싶을 때
                                      ※ '' 싱글코트가 아닌 `` 백틱 기호임  */  
    greeting.classList.remove(HIDDEN_CLASSNAME);
       // user정보 저장후 h1 hidden classname 삭제 -> 유저 네임이 나와야 하니까 !
}


//user 정보 저장 유무 체크                
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME); 
   loginForm.addEventListener("submit", onLoginSub);
                    //submit -> 엔터, 버튼을 클릭할 때 발생

} else {
    paintingGreeting(savedUsername);
}