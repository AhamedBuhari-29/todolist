

const todoList = [{
  name : 'make dishes',
  dueDate : '29-12-2002'
}
  
];
function deleteTodo(index){
  todoList.splice(index,1);
  renderHtml();
}
function renderHtml(){
let todoListHTML = '';
for(i=0; i < todoList.length; i++){
  const name = todoList[i].name;
  const dueDate = todoList[i].dueDate;
  const html = `
  <div class="todo-row">
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick ="deleteTodo(${i});"class = "js-delete-btn delete-btn">Delete</button>
  </div>
  `;
  todoListHTML += html;

}
console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
};
function addTodoList(){

  const inputElement = document.querySelector('.js-input-todo');
  const dueDateInputElement = document.querySelector('.js-date-input-todo');

  const name = inputElement.value;
  const date = dueDateInputElement.value
  todoList.push({
    name:name, //name,
    dueDate : date
  }
  );
  console.log(name);
  inputElement.value='';
  renderHtml();
  
}
