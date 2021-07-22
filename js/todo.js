//selecting DOM elements for manipulation
//find and return elements that mathes specifield selector:
let input = document.querySelector("input[type = 'text']");
let ul = document.querySelector("ul");
let container = document.querySelector("div");
//return a list elements mach spacefied group selectors:
let lists = document.querySelectorAll("li");
//return elements with the given tag name:
let spans = document.getElementsByTagName("span");
let pencil = document.querySelector("#pencil");
let saveButton = document.querySelector(".saveButton");
let clearButton = document.querySelector(".clearButton");
//return element object with id maches to string:
let overlay = document.getElementById("overlay");

//event listener for input to add new todo to the list
input.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13) {
    //creating lists and span when enter is clicked
    let li = document.createElement("li");
    let spanElement = document.createElement("span");
    let icon = document.createElement("i");

    //create variable to get value of text field:
    let newTodo = this.value;
    //set value to textfield
    this.value = "";

    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement, newTodo);
    deleteTodo();
  }
});

//function to delete todo if delete span is clicked
function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function () {
      span.parentElement.remove();
    });
  }
}

// event listener to linethrough list if clicked
ul.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false
);

//save todolist state so user can access it later
saveButton.addEventListener('click', function () {
  localStorage.setItem('todoList', ul.innerHTML);
});

//clear all todo when clear button is clicked
clearButton.addEventListener('click', function () {
  ul.innerHTML = "";
  localStorage.removeItem('todoList', ul.innerHTML);
});

//function to load todo if list is found in local storage.
function loadTodo() {
  if (localStorage.getItem('todoList')) {
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//hide input box, when pencil icon is clicked
pencil.addEventListener('click', function () {
  //activate parameter "display" on input:
  input.classList.toggle('display'); ss
});

//delete todo
deleteTodo();

//load Todo
loadTodo();