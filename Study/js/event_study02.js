

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

// 좀더 간편하게 코드화하기 

function changeH1() {
    const color = selector.style.color;
    let newColor;
    if( color === "white") {
        newColor = "blue";
    } else {
        newColor = "white";
    }

    selector.style.color = newColor;
}

selector.addEventListener("click" , changeH1);
/*
  STEP 1. element를 찾아라
        const selector = document.querySelector(".title h1");   
  STEP 2. event를 liten 헤라 
        selector.addEventListener("click", titleClick); 
  STEP 3. 그 event에 반응(function)해라 
        function titleClick() {
            selector.style.color = "white";
        }
*/

// Css in Javascript
// style -> CSS , animation -> Javascript

function cssChange() {
    //error 최소화하기-> String을 변수에 저장하기
    const clickedClass = "clicked";
                     // css에서 설정해둔 className
    if (selector.className === clickedClass) {       
        selector.className = "";
    } else {
        selector.className = clickedClass;
    }
}

selector.addEventListener("click" , cssChange);

/*
 but javascript로 모든 class name을 변경하는 건 옳지 않음
  html에 class name을 지정하면, js에 지정한 이전 class name이 교체됨
  */

//css에 정의된 classname들로 html element에서 숨기고 표시하는 방법
// -> classList : class들의 목록으로 작업할 수 있게 허용해줌
function classNameChange() {
    const clickedClass = "clicked";
    if (selector.classList.contains(clickedClass)) {       
        selector.classList.remove(clickedClass);
    } else {
        selector.classList.add(clickedClass);
    }
}

selector.addEventListener("click" , classNameChange);


// Toggle (위에 코드 간편화) : classList에서 class가 이미 있는지 확인한뒤 만약 있다면 class 제거, 없다면 추가 

function classListToggle() {
  selector.classList.toggle("clicked")
}

selector.addEventListener("click" , classListToggle);