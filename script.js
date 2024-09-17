const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You have to write someting")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){// this function is ver useful beacuse it stores the data even after we close the window it store the task
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){// it display the stored task 
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();