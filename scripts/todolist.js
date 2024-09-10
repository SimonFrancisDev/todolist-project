const todoInput = document.getElementById("todoInput");
const dateInput = document.getElementById("dateInput");
const addTodoBtn = document.getElementById("add-todo-btn");
const output = document.getElementById("output");

const todoList = [
    {
        todo: "Wash dishes",
        dueDate: "23-14-2024"
    },
    {
        todo: "Watch Youtube",
        dueDate: "24-24-2024"
    }
]

addTodoBtn.addEventListener('click', () => {
    todoList.push({
        todo: todoInput.value,
        dueDate: dateInput.value
    })
    console.log(todoList);
    todoInput.value = "";
    dateInput.value = "";
    displayTodo();
})

function displayTodo () {
    let todoListHTML = '';
    todoList.forEach((item, index) => {
        todoListHTML += `
        <div class="todo-div">
            <p>
                ${item.todo} 

            </p>
        <p>
            ${item.dueDate}
        </p>
        <button class="del-btn" onclick="
            todoList.splice(${index}, 1);
            displayTodo();
        ">Delete</button>
        </div>
        
        `
    }) 
    output.innerHTML = todoListHTML;
}
displayTodo();