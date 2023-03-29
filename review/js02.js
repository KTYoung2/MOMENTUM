
const h1 = document.querySelector(".hello h1");


//html에서 설정한 clssName에 js className 추가하기
function handleTitleClick(){
   const clickedClass = "clicked";
   h1.classList.toggle(clickedClass);
      /* ---> toggle이란 html element h1의 classList에 "clicked" className이 있는지 
             확인한 후  있다면  clicked remove 없다면 clicked add  
      */
}


h1.addEventListener("click", handleTitleClick);
