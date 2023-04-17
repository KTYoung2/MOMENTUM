const clock = document.querySelector("#clock");



function getClock(){
    const date = new Date();
    /* 날짜를 저장할 수 있고, 날짜와 관련된 메서드도 제공해주는 내장 객체 new Date()
                Date 객체의 메서드
                getHours(), getMinutes(), getSeconds(), getMilliseconds()
                 -> getHours() = number여서 padStart만 쓸 수 있음. 
            */   

           //number -> String 데이터타입 변경.
    const hours = String(date.getHours()).padStart(2,"0");
                                        /* padStart(최소 길이, 추가할 문자) function 
                                            내가 가지고 있던 string에 (앞쪽에)새로운 string 추가
                                            만약 설정한 길이와 기존 string의 길이가 같다면 추가 안됨
                                            뒤쭉에 string 추가 -> padEnd();
                                                                                          */
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}



getClock();
//getClock(); 호출을 먼저 해줘야 현재 시간이 바로 보임. 호출 안 하면 00:00:00 -> 현재시간 이렇게 보임. 
setInterval(getClock, 1000);
/*내가 설정한 시간마다 매순간 실행돼야할떄 
ex)서버를 확인한다던가, 2초마다 주식시장 api를 확인해야한다던가
setInterval(실행function, 시간ms);
*/