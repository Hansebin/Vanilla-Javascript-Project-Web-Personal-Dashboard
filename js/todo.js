const todo = (function () {
  const HIDDEN_CLASS = "hidden";
  const TODO_KEY = "todos";
  const savedToDos = localStorage.getItem(TODO_KEY);
  let toDos = [];

  const elements = {
    $toDoForm: document.getElementById("todo-form"),
    $toDoInput: document.querySelector("#todo-form input"),
    $toDoListContainer: document.getElementById("todo-list-container"),
    $toDoList: document.querySelector("#todo-list-container #todo-list"),
  };

  const common = {
    paintingToDo: function (todoObj) {
      const li = document.createElement("li");
      const p = document.createElement("p");
      const button = document.createElement("button");

      li.id = todoObj.id;
      p.innerText = todoObj.text;
      button.addEventListener("click", handleEvent.deleteToDoList);

      li.appendChild(p);
      li.appendChild(button);
      elements.$toDoList.appendChild(li);
    },
    savingToDo: function () {
      localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
    },
    paintingSavedToDos: function () {
      const parsedToDos = JSON.parse(savedToDos);
      if (parsedToDos && parsedToDos.length > 0) {
        elements.$toDoListContainer.classList.remove(HIDDEN_CLASS);
        toDos = parsedToDos;
        parsedToDos.forEach(this.paintingToDo);
      }
    },
  };

  const handleEvent = {
    submitToDoForm: function (e) {
      e.preventDefault();

      const newToDo = elements.$toDoInput.value;
      elements.$toDoInput.value = "";
      const todoObj = {
        id: Date.now(),
        text: newToDo,
      };
      toDos.push(todoObj);
      elements.$toDoListContainer.classList.remove(HIDDEN_CLASS);
      common.paintingToDo(todoObj);
      common.savingToDo();
    },
    deleteToDoList: function (e) {
      const li = e.target.parentElement;
      const id = parseInt(li.id);

      li.remove();
      toDos = toDos.filter((todo) => todo.id !== id);
      common.savingToDo();

      if (toDos.length === 0) {
        elements.$toDoListContainer.classList.add(HIDDEN_CLASS);
      }
    },
  };

  elements.$toDoForm.addEventListener("submit", handleEvent.submitToDoForm);

  common.paintingSavedToDos();
})();
