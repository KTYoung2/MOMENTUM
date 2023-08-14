const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


/*

addEventListener의 function의 
\function onLoginSubmit (event)=> 첫번째 인자에는 
발생된 event의 대한 정보를 제공해줌.js에서 ! 
그래서 나는 그 정보를 받아올 공간만 만들어주면 된다.

*/

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