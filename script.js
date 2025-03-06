const AddBtn = document.querySelector(".add-btn")

const Input = document.querySelector(".input-tag")

const InputRadio = document.querySelector(".inputRadio")

const task = document.querySelector(".task-bar")

const remove = document.querySelector(".task-bar")

Input.addEventListener('input' , (e) =>{

    const lacaldata = localStorage.setItem("task" , e.target.value)
    task.innerHTML = lacaldata ;
    console.log(e.target.value)
})

AddBtn.addEventListener('click' , () => {
    console.log("form the addbtn" , lacaldata)


})