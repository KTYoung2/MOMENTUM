const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//toDos는 항상 비어 있는 array로 시작 const -> let 변경 왜?? 투두리스트 업데이트가 필요하니까. 
let toDos = [];   //배열은 localStorge저장 안됨

//투두리스트 저장 함수
function saveTodos() {
                //JSON.stringify : js object, array 그외 어떤것이든 string으로 바꿔줌
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//버튼 투드 리스트 삭제 기능 함수
function delTodo(event){
    //버튼을 클릭할때 (event)를 얻게됨 --> event는 target(클릭된 html element)을 줌.
    //삭제해야할 타켓 지정 
    const li = event.target.parentElement;
    li.remove();
    //toDo.id (number type)  li.id (string) --> 둘이 타입이 달라 지워지지 않으니, string->number 데이터타입 바꿈
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    /**item을 삭제하는 것이 아니라 삭제하고 싶은 item을 제외하고 새 array를 만든다!
      -----> .filter();

                //이 함수는 반드시 true를 return 해야함 
      function sexyFilter(item){return item !==3 }
                        (item)->agurment 비교해야할 인자 [1,2,3,4]를 넣어주는 공간
      [1,2,3,4].filter(sexyFilter)
        : filter는 sexyFilter function을 호출하고
        sexyFilter는 4번 실행
        true를 리턴하면 js는 그대로 반환할 것이고 
        sexyFilter(1) = 1 
        sexyFilter(2) = 2
        sexyFilter(3) x  -> false 리턴하면 3을 제외하고 리턴할 것임. 
        sexyFilter(4) = 4
     */
    saveTodos();
}


//todo List 작성
function paintToDo(newTodo) {
    //todolist 사용할 html element 만들기 
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   span.innerText = newTodo.text;   
   const button = document.createElement("button");
   button.innerHTML = "✔️";
   button.addEventListener("click", delTodo);
   //li안에 span, button 자식요소 설정하기
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}


function toDoSub(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // --> input의 현재 value(값)를 새로운 변수(newTodo)에 복사
    toDoInput.value = "";
    //text로만 데이터(리스트)를 식별할수 없음(삭제할 때) -> object 저장해 리스트에 식별번호 부여 
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }; 
        //newTodo를 toDos array에 push
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos(); //---> newTodo는 array에 들어감
}

toDoForm.addEventListener("submit", toDoSub);

const savedToDos = localStorage.getItem(TODOS_KEY);

//투두리스트 저장 함수
if(savedToDos !== null ){
      /* 
      원래 내가 만든 배열은 string만 나열해둔 단순한 배열이었는데,
      그 배열을  JSON.parse 함수를 이용하면 
      js가 이해할 수 있는, 살아있는(실제로 무언갈 할 수 있는 ) array로 만들 수 있음.
      */
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;  //기존에 있던 리스트(db)를 간직(기억)한 채 새로운 투두리스트(db)추가 
      // forEach -> array 각 item 하나마다 function 실행을 할 수 있음    
    parsedToDos.forEach(paintToDo);
    /** arrow function(화살표 함수) 둘이 같음
     * 
     * (item) => console.log("this is the turn of : " item )
     * 
     * function sayHello(item){
     * onsole.log("this is the turn of : " item );
     * }
    */
}