const inputBox = document.getElementById("input-box"); // Searching Box
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");

const countDisplay = document.querySelector(".count span");

// Update task count
function updateTaskCount() {
  const totalTasks = document.querySelectorAll("li").length;
  countDisplay.innerHTML = totalTasks;
}

// TODO: addTask Method
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // make a new task
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // adding x icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // x
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
  updateTaskCount();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");

      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
      updateTaskCount();
    }
  },
  false,
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  updateTaskCount();
}

showTask();
