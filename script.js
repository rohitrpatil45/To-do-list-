// const AddBtn = document.querySelector(".add-btn");
// const mainListContainer = document.querySelector(".list-container");
// const Input = document.querySelector(".input-tag");
// const InputRadio = document.querySelector(".inputRadio");
// const task = document.querySelector(".task-bar");
// const remove = document.querySelector(".remove-task");

// const taskvalue = localStorage.getItem("task");
// task.innerHTML = taskvalue;

// Input.addEventListener("input", (e) => {
//   const lacaldata = localStorage.setItem("task", e.target.value);
//   task.innerHTML = e.target.value;

//   AddBtn.addEventListener("click", () => {
//     task.innerHTML = localStorage.getItem("task");
//     Input.value = "";
//   });
// });

// /* <input class="inputRadio" type="radio" />
// <p class="task-bar">the lask which is give by user</p>
// <span class="remove-task">X</span> */

// function CreateList() {
//   // create the element the manin list container
//   const listdiv = document.createElement("input");
//   const PTag = (document.createElement("p"));
//   const removeIcon = (document.createElement("span"));


// // give the classname to it 
//   removeIcon.className = "remove-taks"
//   PTag.className = "InputRadio";
//   listdiv.className = "list";
//   listdiv.type = "Radio"


//   // apppend the list in main container
//   mainListContainer.appendChild(listdiv);
//   mainListContainer.appendChild(PTag);
//   mainListContainer.appendChild(removeIcon);
// }
// Input.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     CreateList();
//     // console.log("enter btn click");
//   }
// });




const AddBtn = document.querySelector(".add-btn");
const mainListContainer = document.querySelector(".list-container");
const Input = document.querySelector(".input-tag");

// Load saved tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => CreateList(task));
});

// Function to Create a Task Item
function CreateList(taskText) {
  // Create elements
  const listDiv = document.createElement("div");
  const radioInput = document.createElement("input");
  const PTag = document.createElement("p");
  const removeIcon = document.createElement("span");

  // Assign classes & attributes
  listDiv.className = "list";
  radioInput.type = "radio";
  radioInput.className = "inputRadio";
  PTag.className = "task-bar";
  removeIcon.className = "remove-task";
  removeIcon.innerText = "X";

  // Set task text
  PTag.innerText = taskText;

  // Append elements
  listDiv.appendChild(radioInput);
  listDiv.appendChild(PTag);
  listDiv.appendChild(removeIcon);
  mainListContainer.appendChild(listDiv);

  // Remove task when clicking "X"
  removeIcon.addEventListener("click", () => {
    listDiv.remove();
    updateLocalStorage();
  });

  // Mark task as completed when clicking radio
  radioInput.addEventListener("click", () => {
    PTag.style.textDecoration = "line-through";
    PTag.style.color = "gray";
  });
}

// Function to Update Local Storage
function updateLocalStorage() {
  const tasks = Array.from(document.querySelectorAll(".task-bar")).map(
    (task) => task.innerText
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Event Listener for Adding a Task
AddBtn.addEventListener("click", () => {
  if (Input.value.trim() !== "") {
    CreateList(Input.value);
    updateLocalStorage();
    Input.value = "";
  }
});

// Allow adding tasks with Enter key
Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && Input.value.trim() !== "") {
    CreateList(Input.value);
    updateLocalStorage();
    Input.value = "";
  }
});
