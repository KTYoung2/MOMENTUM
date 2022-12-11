/*
//변수 선언과 계산기 만들기

const a = 5;
const b = 2;

console.log(a+b);
console.log(a*3);

// 변수값을 바꿀수도 있을 땐 let
let myName ="young";

console.log("myname" + myName);

myName = "taetae";

console.log("newName" + myName);

// DataType - Boolean

const amIFat = true;
console.log(amIFat);

//데이터 정리하는 법 array


const daysOfWeek = ["mon", "tue", "wed","the", "fri"];

console.log(daysOfWeek[2]);

daysOfWeek.push("sat");
console.log(daysOfWeek);

//objects

const player = {
    name : "young",
    points : 8,
    fat : true,
};


player.name = "ktty";
console.log(player.name);


player.lastName = "summer";
console.log(player);


//function
//argument 받는 방식
function sayHello(nameOfPerson, age) {
    console.log ("Hello my name is "+ nameOfPerson + " and i'm " + age);
}

//argument 보내는 방식
sayHello("young", 26);
sayHello("winter",1);


//계산기 만들기
            //// function 데이터 받는 방식(firstNum, secondNum)
function plus(firstNum, secondNum){
    console.log(firstNum+ secondNum);
}

plus(5,3);
// function 데이터 보내기 

function divide (firstNum, secondNum){
    console.log(firstNum / secondNum);
}

divide(10,2);


const player = {
    name : "young",
    sayHello: function(otherPersonName) {
        console.log("Hello!" + otherPersonName + " Nice to meet you");
    }
};

console.log(player.name);
player.sayHello("winter");
player.sayHello("shiri");




// 계산기 만들기 (과제)

const caluator1 = {
    plus : function (a,b){
        console.log(a+b);
    }, 
    sub : function (a,b){
        console.log(a-b);
    },
    mult : function (a,b){
        console.log(a * b);
    },
    divide : function(a,b){
        console.log(a / b);
    }

};

caluator1.plus(1,5);
caluator1.sub(10,5);
caluator1.mult(9,50);
caluator1.divide(4,80);



//return

const age = 80;
function caluatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2;

}

const krAge = caluatorKrAge(age);
console.log(krAge); 


const caluator = {
    plus : function (a,b){
       return a+b;
    }, 
    sub : function (a,b){
        return a-b;
    },
    mult : function (a,b){
        return a * b;
    },
    divide : function(a,b){
        return a / b;
    }

};

//코드들이 상호의존하고 있음 (서로 연결돼 있다)
const plusResult = caluator.plus(2,3);
const minusResult = caluator.sub(plusResult, 10);
const timesResult = caluator.mult(10,minusResult);
const divideResult = caluator.divide(timesResult,plusResult);



//type 변경 
const age = parseInt(prompt("How old are you?"));

console.log(age);

//조건문


if(isNaN(age) ){
    console.log("Please write a number");
} else if(age < 18){
    console.log("you are too young");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else {
    console.log ("you should exercise");
}



//html in javascript 아주 중요한 개념 !
const title = document.getElementById("title");

title.innerText = "hahahahaha ! ";

//className 

const hello = document.getElementsByClassName("hi");
//html에 지정해 놓은 ClassName과 동일해야함

console.log(hello);


*/
//div 안에 있는 h1 가져오기

const title = document.getElementsByTagName("h1");
/*
console.log(h1);
*/

//querySelector

const selector = document.querySelector(".title h1");
                                    // .className, tag 명시
/*
//javascript에서 스타일 변경

selector.style.color= "white";
*/
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
