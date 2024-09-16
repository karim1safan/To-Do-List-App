const inputBox = document.getElementById("input-box"); // Searching Box
const listContainer = document.getElementById("list-container");

const clickSound = document.getElementById("click-sound"); // Sound File
const completedSound = document.getElementById("completed-sound");
const removeSound = document.getElementById("deleted-sound")
const addBtn = document.getElementById("add-btn");

// Sound Effect When The User Input a New Task
addBtn.addEventListener("click", () => clickSound.play());

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");

      if (e.target.classList.contains("checked")) {
        completedSound.play();
      }

      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      removeSound.play();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
