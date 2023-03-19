let listFormDOM = document.querySelector("#listForm")
listFormDOM.addEventListener("submit", formHandler)
const alertDOM = document.querySelector(".alert")
let liDOM = document.querySelector("li") 


let ALERT = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>WARNING!</strong> You should check in on some of the fields.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`



function formHandler() {
    event.preventDefault()
    const ADDLIST = document.querySelector("#addInput")
    
    if (ADDLIST.value) {
        addItem(ADDLIST.value)
        ADDLIST.value = ""
    } else {
        alertDOM.innerHTML = ALERT
    }
}


let ulDOM = document.querySelector("ul")

// ADD TO THE LIST
const addItem = addlist => {
    let liDOM = document.createElement("li")
    let closeDOM = document.createElement("button")
    liDOM.innerHTML = `${addlist}`
    closeDOM.classList.add("btn", "btn-close", "float-end")
    ulDOM.appendChild(liDOM)
    liDOM.appendChild(closeDOM)
    liDOM.setAttribute("onclick", "completeToDo(this)")
    closeDOM.setAttribute("onclick", "removeToDo(this)")
}



// CHECK
function completeToDo(element) {
    if (element.className == "completed") {
        element.classList.remove("completed")
    } else {
        element.classList.add("completed")
    }
}

// REMOVE
function removeToDo(element) {
    element.parentNode.remove()
}



