let allTasks = document.getElementById("All-tasks");
const inputBox = document.querySelector('.task-entry');

function addTask() {
    if (inputBox.value === '') alert("No Task Entered!!!");
    else {
        let newTask = document.createElement('li');
        newTask.innerHTML = `<input type="checkbox" onclick="check()">${inputBox.value} <i onclick="updateTask()" class="pen fa-solid fa-pen"></i> <i onclick="deleteTask()" class="fa-solid fa-trash-can"></i>`;
        allTasks.appendChild(newTask);
        inputBox.value = '';
    }
    storeData();
}

function deleteTask() {
    this.event.target.parentElement.remove();
    storeData();
}

function updateTask() {
    const updateData = prompt("Enter Updated Data: ");
    console.log(updateData);
    this.event.target.parentElement.innerHTML = `<input type="checkbox" onclick="check()">${updateData} <i onclick="updateTask()" class="pen fa-solid fa-pen"></i> <i onclick="deleteTask()" class="fa-solid fa-trash-can"></i>`;
    storeData();
}

function clearAll() { 
    localStorage.clear(); 
    loadData();
}

document.addEventListener('keypress', e => {
    if(e.key === 'Enter')  addTask();
});

function check() {
    const list = document.querySelectorAll('li');
    list.forEach(iterator => {
        iterator.addEventListener('click', e => {
            const checkbox = e.target;
            const li = e.target.parentElement;
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        })
    })
}

function storeData() {
    localStorage.setItem("Tasks", allTasks.innerHTML);
}

function loadData() {
    allTasks.innerHTML = localStorage.getItem("Tasks");
}

loadData();