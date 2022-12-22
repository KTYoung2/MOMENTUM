//사용자 위치에 맞는 날씨 api 구현
            //api -> 다른 서버와 이야기할 수 있는 방법

const API_KEY = "a9904b42bff74e954dc5ba6698888e01";
function onGeoOk(position){
    //위도 
    const lat = position.coords.latitude;
    //경도
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //js가 url 요청
    //fetch -> promise 당장 뭔가 일어나지 않고 시간이 걸린뒤에 일어나는 것. 
    fetch(url).then(response => response.json())
              .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
              });
   
}

function onGeoError(){
    alert("Can't find you. Sorry");
}

 //user위치 알아내기           
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
                         //getCurrentPosition(성공했을 때의 함수, 에러났을 때의 함수) 2개가 필요