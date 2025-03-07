const AddBtn = document.querySelector(".add-btn");
const mainListContainer = document.querySelector(".list-container");
const Input = document.querySelector(".input-tag");
const InputRadio = document.querySelector(".inputRadio");
const task = document.querySelector(".task-bar");
const remove = document.querySelector(".remove-task");

const taskvalue = localStorage.getItem("task");
task.innerHTML = taskvalue;

Input.addEventListener("input", (e) => {
  const lacaldata = localStorage.setItem("task", e.target.value);
  task.innerHTML = e.target.value;

  AddBtn.addEventListener("click", () => {
    task.innerHTML = localStorage.getItem("task");
    Input.value = "";
  });
});

/* <input class="inputRadio" type="radio" />
<p class="task-bar">the lask which is give by user</p>
<span class="remove-task">X</span> */

function CreateList() {
  // create the element the manin list container
  const listdiv = document.createElement("input");
  const PTag = (document.createElement("p"));
  const removeIcon = (document.createElement("span"));


// give the classname to it 
  removeIcon.className = "remove-taks"
  PTag.className = "InputRadio";
  listdiv.className = "list";
  listdiv.type = "Radio"


  // apppend the list in main container
  mainListContainer.appendChild(listdiv);
  mainListContainer.appendChild(PTag);
  mainListContainer.appendChild(removeIcon);
}
Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    CreateList();
    // console.log("enter btn click");
  }
});
