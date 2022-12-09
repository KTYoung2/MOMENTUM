
/* 변수 선언과 계산기 만들기

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
*/
//objects
/*
const player = {
    name : "young",
    points : 8,
    fat : true,
};


player.name = "ktty";
console.log(player.name);


player.lastName = "summer";
console.log(player);

*/

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

const caluator = {
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

caluator.plus(1,5);
caluator.sub(10,5);
caluator.mult(9,50);
caluator.divide(4,80);


