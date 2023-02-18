let todos = localStorage.getItem("todos");
let todosList = document.querySelector("#todosList");
let sampleTodo = document.querySelector("#sampleTodo").cloneNode(true);
sampleTodo.hidden = false;
sampleTodo.removeAttribute("id");

// Set Default Todos

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

// Complete & Delete Todo

function updateTodos(todos, filteredTodos = null) {
  todosList.innerHTML = "";
  todos.forEach((todo, index) => {
    let li = sampleTodo.cloneNode(true);
    if (filteredTodos) {
      li.hidden = filteredTodos.includes(todo) ? false : true;
    }
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

// Add & Search Todo

let actions = document.querySelector("#actions");

Array.from(actions.children).forEach((action) => {
  let actionName = action.dataset.action;
  let form = document.querySelector(`#${actionName}`);
  action.addEventListener("click", (e) => {
    e.preventDefault();
    if (actionName === "add") {
      updateTodos(todos);
    }
    let formWrapper = document.querySelector("#formWrapper");
    Array.from(formWrapper.children).forEach((form) => {
      form.hidden = true;
    });
    form.hidden = false;
  });

  // Add todo
  if (actionName === "add") {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let input = form.querySelector("input");
      if (input.value.trim()) {
        todos.push({
          content: input.value,
          status: false,
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        updateTodos(todos);
        input.value = "";
      }
    });
  }
  // Search todo
  if (actionName === "search") {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    let input = form.querySelector("input");
    input.addEventListener("input", (e) => {
      if (input.value) {
        let filteredTodos = todos.filter((todo) =>
          todo.content.toLowerCase().includes(input.value.toLowerCase())
        );
        updateTodos(todos, filteredTodos);
      } else {
        updateTodos(todos);
      }
    });
  }
});
