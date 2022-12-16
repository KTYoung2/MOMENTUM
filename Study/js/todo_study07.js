const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];   //배열은 localStorge저장 안됨

//투두리스트 저장 함수
function saveTodos() {
                //JSON.stringify : js object, array 그외 어떤것이든 string으로 바꿔줌
    localStorage.setItem("todos", JSON.stringify(toDos));
}

//버튼 투드 리스트 삭제 기능 함수
function delTodo(event){
    //버튼을 클릭할때 (event)를 얻게됨 --> event는 target을 줌.
    //삭제해야할 타켓 지정 
    const li = event.target.parentElement;
    li.remove();
}


//todo List 작성
function paintToDo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;   
   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", delTodo);
   //li 자식요소 넣어주기
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}


function toDoSub(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // --> input의 현재 value(값)를 새로운 변수(newTodo)에 복사
    toDoInput.value = "";
    //newTodo를 toDos array에 push
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos(); //---> newTodo는 array에 들어감
}

toDoForm.addEventListener("submit", toDoSub);