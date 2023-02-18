let todos = localStorage.getItem("todos");

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
