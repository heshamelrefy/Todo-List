// initialize variables from localStorage
let currentUser =JSON.parse(localStorage.getItem('currentUser')) || {}
let allTodoList =JSON.parse(localStorage.getItem('Tasks')) || []
// get current user tasks
let currentUserTasks=allTodoList.filter(task=>task.userEmail == currentUser.email)
let newTaskInput = document.getElementById("new-task-input")
let tasks = document.getElementById('tasks')
let taskBtn=document.getElementById("new-task-submit")
let tasksHeader=document.getElementById("tasksHeader")
document.getElementById("userName").innerHTML='<span class="hello">Hello,</span>'+' '+currentUser.firstName+' '+currentUser.lastName
authenticationStatus()
showTasks()

function showTasks() {
  tasks.innerHTML=''
  if (currentUserTasks.length) {
    tasksHeader.innerHTML='Tasks'
  }
  else{
    tasksHeader.innerHTML='No Tasks Added Yet'
  }
  for (let i = 0; i < currentUserTasks.length; i++) {
    if (currentUserTasks[i].complete) {
      tasks.innerHTML+=`
      <div class="task ">
      <div class="content d-flex align-items-center ">
        <i onClick="complete(${currentUserTasks[i].id})" class="fa-regular fa-circle-check me-2"></i>
        <div id="content-task" class="complete">${currentUserTasks[i].text}</div>
      </div>
      <div class="actions">
        <button onClick="deleteTask(${currentUserTasks[i].id})" class="delete">Delete</button>
      </div>
      </div>
      `
      
    }
    else
    {
      tasks.innerHTML+=`
      <div class="task ">
            <div class="content d-flex align-items-center ">
              <i onClick="complete(${currentUserTasks[i].id})" class="fa-regular fa-circle me-2"></i>
              <div id="content-task" class="">${currentUserTasks[i].text}</div>
            </div>
            <div class="actions">
              <button onClick="updateTask(${currentUserTasks[i].id})"  class="edit">Edit</button>
              <button onClick="deleteTask(${currentUserTasks[i].id})" class="delete">Delete</button>
            </div>
          </div>
      `
    }
  }
}
document.forms[0].addEventListener('submit',(e)=>{
    e.preventDefault()
    if (taskBtn.value== 'Add Task') {
      addNewTask()

    }
    else
    {
      setUpdatedTask(taskBtn.dataset.taskId)
    }
    e.target.reset()
})
function addNewTask() {
  let newTask={
    id:Math.random()*20,
    userEmail:currentUser.email,
    text:newTaskInput.value,
    complete:false
  }
  currentUserTasks.push(newTask)
  allTodoList.push(newTask)
  localStorage.setItem('Tasks',JSON.stringify(allTodoList))
  showTasks()
}

function deleteTask(id) {
  currentUserTasks=currentUserTasks.filter(task=> task.id != id)
  allTodoList=allTodoList.filter(task=> task.id != id)
  localStorage.setItem('Tasks',JSON.stringify(allTodoList))
  showTasks()
}

function complete(id) {
  
  currentUserTasks=currentUserTasks.map((task,index)=>{
   if (task.id== id) {
    
    if (task.complete) {
      currentUserTasks[index]=false
    }
    else
    {
      currentUserTasks[index]=true
    }
  }
  return task
})
console.log(currentUserTasks);
  allTodoList=allTodoList.map(task=>{
    if (task.id== id) {
     if (task.complete) {
       task.complete=false
     }
     else
     {
       task.complete=true
     }
    }
    return task
   })
  localStorage.setItem('Tasks',JSON.stringify(allTodoList))
  showTasks()
  
}

function updateTask(id) {
  for (let i = 0; i < currentUserTasks.length; i++) {
    if (currentUserTasks[i].id == id) {
      newTaskInput.value= currentUserTasks[i].text
      taskBtn.value='Update Task'
      taskBtn.dataset.taskId=id
    }
    
  }
}

function setUpdatedTask(id){
  for (let i = 0; i < currentUserTasks.length; i++) {
    if (currentUserTasks[i].id == id) {
      currentUserTasks[i].text = newTaskInput.value
    }
    
  }
  for (let i = 0; i < allTodoList.length; i++) {
    if (allTodoList[i].id == id) {
      allTodoList[i].text = newTaskInput.value
    }
    
  }
  taskBtn.value='Add Task'
  taskBtn.dataset.taskId=''
  localStorage.setItem('Tasks',JSON.stringify(allTodoList))
  showTasks()
}

function logOut()
{
    localStorage.setItem("currentUser",JSON.stringify({}))
    window.location.href="login.html"
}
function authenticationStatus() {
    if (!currentUser.email) {
        window.location.href="login.html"
    }
}
