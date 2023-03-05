
/* 변수(variable) : 값을 저장하거나, 유지하는 역할

1.const(constant((상수: 바뀌지 않는 값)) + 변수명 = 값;

2.let : 변수값을 변경하고 싶을 때 (업데이트가 필요할 때)

기본적으론 const를 사용 ( 모든 변수를 업데이트 해야하는 경우는 잘 없음 )

3.var : let이랑 비슷. 어디에서나 변수값을 변경할 수 있는데, 값을 보호할 수 없어
요즘엔 쓰지 않는 추세. 

*/


const a = 5;
const b = 2;

//javascript에서 변수명을 선언할때 스페이스가 필요하다면 대문자로 표기
let myName = "young";

console.log(a + b);
console.log(a / b);
console.log(a * b);

console.log("hello " + myName);

//let 변수값 변경
myName = "taeyoung";

console.log("your new name is " + myName);


/* 데이터 타입 boolean true or false
    ex) 사용자가 로그인 했는가? true(0 : 켜져있나?) or false(1 : 꺼져있나?)
        비디오가 재생되고 있는가? true or false
*/

const amISkinny = false;

console.log(amISkinny);

/* null , undefined 
 
    null : 변수는 있지만 값엔 아무 것도 없는 상태로 채워진 것
    -------> null은 자연적으로 발생하지 않음( 변수에 값 없다는걸 확인하기 위해 쓰는 용도)
    undefined : 변수는 존재하는데 값을 부여하지 않는 것

 */

const c = null;
let d; 

console.log(c,d);


/*

array(배열) : 하나의 변수 안에 데이터 list 가지는 것   

const 변수 = [값, 값, 값];

*/

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

//데이터 타입이 다른 것들도 배열화 시킬 수 있음
const me = "young";
const nothing = [1, 2, null, true, "hello", 0.5, me];

console.log(daysOfWeek);

console.log(nothing);

/* array에서 아이템 불러오기 
    변수[얻고 싶은 항목의 번호]
    ** 컴퓨터는 0부터 시작
*/
console.log(daysOfWeek[0]);


//기존 배열에 아이템 추가하기 변수.push
daysOfWeek.push("sun");
console.log(daysOfWeek);

/* Object(객체) 생성

    const 변수 = { 
        property(특성) : 값 ,
        property(특성) : 값 ,
        property(특성) : 값 ,
    };
    
    배열화 하지 않고 왜 Object(객체) 생성을 할까?
    배열은 값(아이템)이 뭘 의미하는지 알 수 없기 때문에,
    객체를 생성해 무슨 값인지 알려주기위해 이름을 붙여준다고 생각하면 될듯. 

*/

const player = {
    name : "Kyoung",
    points : 10,
    fat : true,
};

console.log(player.name);

//Object property 값 업데이트 (변수는 const 상수기 때문에 변경 못하지만, 그안에 프로퍼티들은 수정 가능! )
player.points = 300;

console.log(player.points);

//업데이트 코드 정리
player.points = player.points - 30;
console.log(player.points);


//프로퍼티 추가
player.number = 10;
console.log(player);


/* 

function 
: 코드를 캡슐화 해서 그걸 계속 반복해서 사용할 수 있도록 한 것.

function 함수이름(함수 내부로 전달 받은 변수 이름 -> 매개변수1((parameter)),매개변수2) {
    ** 변수는 function body 내에만 존재

    함수가 호출되었을 때 실행하고자 하는 실행문;
}

*/

function sayHello(nameOfPerson, age) {

   console.log("hello my name is " + nameOfPerson + " and I'm " + age);

}


//function에 값,이나 데이터를 입력하는(argument) 방식 (console.log(argument) 생각하기
sayHello("young", 28);
sayHello("winter", 1);


//계산기 만들기

function plus(a , b) {
    console.log(a + b);
}

plus(1 , 2);

function divide(c, d) {
    console.log(c / d);
}

divide(50, 5);


//Object와 function 한번에 생성하기

const animal = {
    name : "winter",
    sayHi : function(otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you" + 
        " my name is " + animal.name);

    },
};

console.log(animal.name);
animal.sayHi("young");
animal.sayHi("suuuuu");




//return

const age = 28;

function calculatorUsaAge(num) {
    return num - 2;
};

const usaAge = calculatorUsaAge(28);

console.log(usaAge);




const calculator = {
    plus : function (a,b) {
       return a+b;
       /*return을 하고 나면 그뒤의 코드는 작동하지 않음. 
        return하는 순간 function 종료되기 때문. 
       */
      console.log("hello") 
    },
    subtract : function (a,b) {
        return  a-b;
    },
    divide : function (a,b) {
        return  a/b;
    },
    multiply : function (a,b) {
        return a*b;
    },
       
};


//console.log로 단순히 콘솔에 결과를 보기 위할때완 다르게 변수에 값이 있음. -> 상호작용 가능.
const plusResult = calculator.plus(10,3);
const subtractResult = calculator.subtract(plusResult,1);
const divideResult = calculator.divide(subtractResult, 4);
const multiplyResult = calculator.multiply(plusResult,divideResult);





//조건문을 활용해 음주 가능 계산기 만들기. 


/*string은 문자라 값을 비교할 수 없으니, parseInt function -> number로 type 변경 

    function은 내부(1) 외부(2) 순서로 실행. 
    -----> (2)parseInt((1)prompt("How old are you?"));
*/
const aGe = parseInt(prompt("How old are you?"));

//typeof -> value type을 알 수 있는 프로퍼티  
console.log(typeof aGe);


//isNaN -> 하나의 argument(인자)를 주면 NUMBER인지 아닌지 boolean으로 반환(return)해줌
console.log(isNaN(aGe));


/**
   조건문
   if (조건문) {
     조건이 참일 때 실행할 코드
    } else {
     조건이 거짓일 때 실행할 코드 }

 */

     /*
if(isNaN(aGe)) {
    console.log("나이 좀 써라 이눔아");
} else {
    console.log("ㄳㄳ");
}*/


if(isNaN(aGe)) {
    alert("나이(숫자)를 적어주세요.");
}else if (aGe < 18) {
    alert("성인이 된 후에 접속해주세요.");
}else if (aGe >= 18 && aGe <= 65) {
    alert("Enjoy");
}else {
    alert("지나친 음주는 건강에 좋지 않습니다.");
}