const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = [];

const toDoCommon = {
  paintingToDo: function (todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = todoObj.id;
    span.innerText = todoObj.text;
    button.innerText = "X";
    button.addEventListener("click", handleEventToDo.deleteToDoList);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  },
  savingToDo: function () {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
  },
  paintingSavedToDos: function () {
    if (savedToDos) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(this.paintingToDo);
    }
  },
};

const handleEventToDo = {
  submitToDoForm: function (e) {
    e.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const todoObj = {
      id: Date.now(),
      text: newToDo,
    };
    toDos.push(todoObj);
    toDoCommon.paintingToDo(todoObj);
    toDoCommon.savingToDo();
  },
  deleteToDoList: function (e) {
    const li = e.target.parentElement;
    const id = parseInt(li.id);

    li.remove();
    toDos = toDos.filter((todo) => todo.id !== id);
    toDoCommon.savingToDo();
  },
};

toDoForm.addEventListener("submit", handleEventToDo.submitToDoForm);

const savedToDos = localStorage.getItem(TODO_KEY);
toDoCommon.paintingSavedToDos();
