let todos = localStorage.getItem("todos");
let todosList = document.querySelector("#todosList");
let sampleTodo = document.querySelector("#sampleTodo").cloneNode(true);
sampleTodo.hidden = false;
sampleTodo.removeAttribute("id");

try {
  todos = JSON.parse(todos);
  todos = todos.length ? todos : null;
} catch (error) {
  todos = null;
}

if (!todos) {
  todos = ["Shopping", "Watch videos", "Sport"];
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateTodos(todos) {
  todosList.innerHTML = "";
  todos.forEach((todo, index) => {
    let li = sampleTodo.cloneNode(true);
    li.querySelector("span").textContent = todo;
    li.querySelector(".delete").addEventListener("click", (e) => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      updateTodos(todos);
    });
    todosList.prepend(li);
  });
}

updateTodos(todos);
