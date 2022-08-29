const toDosStore = ["Shopping", "Home work", "Go to the gym"];

// Write your code here

//Add item

const insertTodo = (...item) => toDosStore.push(...item);

insertTodo("Programming", "shower", "healthy meal", ["Shopping", "Test"]);
console.log(toDosStore);

//Remove an item

const removeTodo = (num) => toDosStore.splice(num, 1);

removeTodo(6);

console.log(toDosStore);

//Edit an item

const editTodo = (index, replace, newItem) =>
  toDosStore.splice(index, 1, newItem);

editTodo(0, 1, "Fucking");

console.log(toDosStore);
