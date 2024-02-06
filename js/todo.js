const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoListContainer = document.getElementById("todo-list-container");
const toDoList = toDoListContainer.querySelector("#todo-list");

const TODO_KEY = "todos";

let toDos = [];

const toDoCommon = {
  paintingToDo: function (todoObj) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");

    li.id = todoObj.id;
    p.innerText = todoObj.text;
    button.addEventListener("click", handleEventToDo.deleteToDoList);

    li.appendChild(p);
    li.appendChild(button);
    toDoList.appendChild(li);
  },
  savingToDo: function () {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
  },
  paintingSavedToDos: function () {
    const parsedToDos = JSON.parse(savedToDos);
    if (parsedToDos && parsedToDos.length > 0) {
      toDoListContainer.classList.remove(HIDDEN_CLASS);
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
    toDoListContainer.classList.remove(HIDDEN_CLASS);
    toDoCommon.paintingToDo(todoObj);
    toDoCommon.savingToDo();
  },
  deleteToDoList: function (e) {
    const li = e.target.parentElement;
    const id = parseInt(li.id);

    li.remove();
    toDos = toDos.filter((todo) => todo.id !== id);
    toDoCommon.savingToDo();

    if (toDos.length === 0) {
      toDoListContainer.classList.add(HIDDEN_CLASS);
    }
  },
};

toDoForm.addEventListener("submit", handleEventToDo.submitToDoForm);

const savedToDos = localStorage.getItem(TODO_KEY);
toDoCommon.paintingSavedToDos();
