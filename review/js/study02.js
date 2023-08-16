//javascript에서 html element를 가져오는 법
const title = document.querySelector(".hello h1");


//elememts에서 class name을 변경, 제거, 추가. 
function handleClick() {
    title.classList.toggle("clicked");
};




title.addEventListener("click", handleClick);



