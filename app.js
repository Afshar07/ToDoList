const btn = document.querySelector(".submit-btn");
const list = document.querySelector(".Tasks");
const taskList = document.getElementsByTagName("li");
const clear = document.querySelector(".clearbtn");
// window.addEventListener("load", function(){
//     console.log("Shit")
// })

const setItemInLS = function (task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const getTasks = function () {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        li.classList.add("task-item");
        list.appendChild(li);
      });
  }

};

btn.addEventListener("click", function () {
  let input = document.querySelector(".todo-input");
  const li = document.createElement("li");
  const text = document.createTextNode(input.value);
  li.appendChild(text);
  li.classList.add("task-item");
  list.appendChild(li);
  setItemInLS(input.value);
  input.value = "";
});
document.addEventListener("DOMContentLoaded", getTasks);
clear.addEventListener("click", function () {
  localStorage.clear();
  list.innerHTML = "";
});

// Get Tasks from LS
