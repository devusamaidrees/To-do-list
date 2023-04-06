const input_text=document.getElementById("text")
const list_container=document.getElementById("list-container")
function Add_task() {
    if (input_text.value=="") {
        alert("You have to write something")
    }
    else{
        let li =document.createElement("li")
        li.innerHTML=input_text.value
        list_container.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input_text.value=""
    Save_Data()
}
list_container.addEventListener("click",function (e) {
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked")
        Save_Data()
    }
    else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove()
        Save_Data()
    }
})
function Save_Data() {
    localStorage.setItem("Data",list_container.innerHTML)
}
function Show_Data() {
    list_container.innerHTML=localStorage.getItem("Data")
}
Show_Data()