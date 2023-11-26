

const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const list = document.querySelector('#tasks');

loadEventListeners();
        
function loadEventListeners() {
  form.addEventListener('submit', addTask);  
}

function addTask(e) {
  if(input.value === '') {
    alert('Add a task');
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    
    list.appendChild(li);
    
    input.value = ''; 
  }

  e.preventDefault();
}


