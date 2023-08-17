const images = ["1.JPG", "2.JPG", "3.JPG"];

const chosenImage = images[[Math.floor(Math.random() * images.length)]];


//js에서 html 추가하기 
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
