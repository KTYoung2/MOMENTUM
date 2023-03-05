
function windowResize() {
    const size = window.innerWidth;
    let backGroundColor;
    if (size <= 700) {
      backGroundColor = "blue";
    } else if (size <= 900) {
      backGroundColor = "purple";
    } else {
      backGroundColor = "orange";
    }
  
    document.body.style.backgroundColor = backGroundColor;
  }
  
  window.addEventListener("resize", windowResize);