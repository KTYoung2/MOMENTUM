const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


function paintToDo() {
    
}




function toDoSub(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // --> input의 현재 value(값)를 새로운 변수(newTodo)에 복사
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", toDoSub);