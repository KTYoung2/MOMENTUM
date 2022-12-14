
//시계 만들기 
const clock = document.querySelector("#clock");


function getClock(){
    const date = new Date();
            /* 날짜를 저장할 수 있고, 날짜와 관련된 메서드도 제공해주는 내장 객체 new Date()
                Date 객체의 메서드
                getHours(), getMinutes(), getSeconds(), getMilliseconds()
                 -> getHours() = number여서 padStart만 쓸 수 있음. 
            */
                 //number -> String 데이터타입 변경.
    const hours = String(date.getHours()).padStart(2, "0");
                                    /* padStart(최소 길이, 추가할 문자) function 
                                        내가 가지고 있던 string에 (앞쪽에)새로운 string 추가
                                    */
    const miuntes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${miuntes}:${seconds}`;
}

getClock()// 이걸 한 번 실행하고 Interval 실행

//Interval '매번' (실시간)일어나야하는 무언가 
setInterval(getClock, 1000);
    //1.실행하고자 하는 function 2. 호출 function 간격정의(ms)

//setTimeout 얼마의 시간 뒤에 function을 호출할 것인지
//setTimeout(sayHello, 5000);
