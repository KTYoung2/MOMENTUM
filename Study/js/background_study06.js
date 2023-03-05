//랜덤 배경화면 

const images = ["back_img01.png","back_img02.jpg","back_img03.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];


/* js에서 (랜덤)이미지를 만들고 html에 추가하기
 (.createElement)-> html에서 사용할 tag 생성 **블로그 정리할 때 좀더 알아볼것.  */
const bgImg = document.createElement("img");

bgImg.src = `/Study/img/${randomImg}`;

document.body.appendChild(bgImg);
//append -> 가장 끝에 설정 prepend -> 가장 위쪽에 설정