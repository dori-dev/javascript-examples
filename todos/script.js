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
  todos = [
    {
      content: "Shopping",
      status: false,
    },
    {
      content: "Watch videos",
      status: false,
    },
    {
      content: "Sport",
      status: true,
    },
  ];
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateTodos(todos) {
  todosList.innerHTML = "";
  todos.forEach((todo, index) => {
    let li = sampleTodo.cloneNode(true);
    let span = li.querySelector("span");
    span.textContent = todo.content;
    if (todo.status) {
      span.classList.add("text-decoration");
    }
    li.querySelector(".delete").addEventListener("click", (e) => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      updateTodos(todos);
    });
    span.addEventListener("click", (e) => {
      span.classList.toggle("text-decoration");
      todos[index].status = !todos[index].status;
      localStorage.setItem("todos", JSON.stringify(todos));
    });
    todosList.prepend(li);
  });
}

updateTodos(todos);
