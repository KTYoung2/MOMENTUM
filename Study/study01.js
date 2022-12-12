
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
const age1 = parseInt(prompt("How old are you?"));

console.log(age1);

//조건문


if(isNaN(age1) ){
    console.log("Please write a number");
} else if(age1 < 18){
    console.log("you are too young");
} else if (age1 >= 18 && age1 <= 50) {
    console.log("you can drink");
} else {
    console.log ("you should exercise");
}


