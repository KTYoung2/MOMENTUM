//01.변수

//const (상수) :  값이 바뀔 수 없음
const a = 5;
const myName = "young";

console.log(a + 2);
console.log("흔수의 정신적인 나이는 " + a + "다.")
console.log("my name is " + myName);

//let : 값을 업데이트 할 수 있음
let myDog = "sunmmer";

console.log(myDog);

//값 업데이트
myDog = "winter";

console.log(myDog);

/**

기본적으로 const 가 디폴트. 
업데이트가 필요할 때 가끔 let

 */

console.log("=======================================");

//데이터 타입 boolean true or false(디폴트)   

const amIfat = true;

console.log(amIfat);


/* array(배열) 
가장 기본적인 데이터 정리방법
데이터 타입들을 그룹으로 묶기.
const 변수명 = [];
*/

const week = [ "mon", "tue", "wed", "tue", "fri", "sat" ];


//array 안 아이템 접근하지 
console.log(week[1]);

//array 기존 배열 안에 아이템 추가  변수명.push()
week.push("sun");

console.log(week);



// Object (객체)


/**
 *   const 변수명 = {
 *    
 *     property(특성),
 *      :프로퍼티는 객체의 속성을 나타내는 접근 가능한 이름과 활용 가능한 값을 가지는 특별한 형태이다. 
 *       특정객체가 가지고 있는 정보를 품고 있어 그 객체가 가진 정보에 직접적으로 접근할 수 있게 해준다.
 *      
 *     }
 */

const player = {
    name : "winter",
    point : 50,
    fat :true,
};

console.log(player);
console.log(player.point);

//Object 없데이트 (변수가 const일뿐, 프로퍼티들은 업테이트 가능. )
player.point = 100;
console.log(player.point);
player.point = player.point + 150;
console.log(player.point);

//Object 프로퍼티 추가
player.cute = true;

console.log(player);



/* function 코드를 캡슐화해 실행을 여러번 할 수 있게 해줌.

하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록을 의미합니다.
이러한 함수는 필요할 때마다 호출하여 해당 작업을 반복해서 수행할 수 있습니다.

자바스크립트에서 함수의 정의는 function 키워드로 시작되며, 다음과 같은 구성요소를 가집니다.

1. 함수의 이름

2. 괄호 안에 쉼표(,)로 구분되는 함수의 매개변수(parameter)

3. 중괄호({})로 둘러싸인 자바스크립트 실행문


문법
function 함수이름(매개변수1, 매개변수2,...) {

    함수가 호출되었을 때 실행하고자 하는 실행문;

}

함수 이름(function name)은 함수를 구분하는 식별자(identifier)입니다.

매개변수(parameter)란 함수를 호출할 때 인수(argument)로 전달된 값을 함수 내부에서 사용할 수 있게 해주는 변수입니다.

*/

 function sayHello(e,a) {
    console.log("Hello my name is" + e + " and I'm " + a);
 };

sayHello(" young", 26);
sayHello(" winter", 1.8);



const dog = {
    name : "winter",
    hello: function(e){
        console.log("wolwol" + e + "nice too meet you");
    },
};

dog.hello("young");


//계산기 만들기

const calculator = {
    plus : function (a, b) {
        return a + b;
    },
    sub : function (a,b){
        return a - b;
    },

    divide : function(a,b){
        return a / b;
    },

    multiply: function(a,b){
        return a * b;
    },

};

const pluseResult = calculator.plus(2,3);
const subResult = calculator.sub(10, 2);
const divideResult = calculator.divide(pluseResult, 5);

console.log(pluseResult);
console.log(pluseResult + subResult);
console.log(divideResult);


//return 
/*
자바스크립트에서 함수는 반환(return)문을 포함할 수 있습니다.
이러한 반환문을 통해 호출자는 함수에서 실행된 결과를 전달받을 수 있습니다.
반환문은 함수의 실행을 중단하고, return 키워드 다음에 명시된 표현식의 값을 호출자에게 반환합니다.
반환문은 배열이나 객체를 포함한 모든 타입의 값을 반환할 수 있습니다.


*/

const age = 26;


function calculateKrAge(e){
    return e + 2;
};

const krAge = calculateKrAge(age);

console.log(krAge);



//조건문

