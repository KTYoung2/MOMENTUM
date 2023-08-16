const clock = document.querySelector("#clock");



function getClock(){
    const date = new Date();            //.padStart(string 길이, 채워넣을 문구)=> 문자 추가해주는 함수
                                        //but date 는 number type이기 때문에 String으로 데이터 타입 변환!!
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


//브라우저를 켜자마자 시계가 출력돼야 하는데, 1초 기다렸다가 보이니까 getClock(); 함수 즉시 실행
getClock();
setInterval(getClock, 1000);
