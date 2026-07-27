let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Load tasks from localStorage
if (localStorage.getItem("tasks")) {
  tasks.innerHTML = localStorage.getItem("tasks");
}

add.onclick = function () {
  if (input.value.trim() !== "") {
    let task = document.createElement("div");

    task.className = "task";
    task.innerText = input.value;

    tasks.appendChild(task);

    localStorage.setItem("tasks", tasks.innerHTML);

    input.value = "";
  }
};

// Optional: remove task when clicked
tasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("task")) {
    e.target.remove();
    localStorage.setItem("tasks", tasks.innerHTML);
  }
});