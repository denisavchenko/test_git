const inputField = document.querySelector('.input-field textarea'),
      todoLists = document.querySelector('.todoLists'),
      pendingNum = document.querySelector('.pending-num'),
      clearButton = document.querySelector('.clear-button');

// console.log(inputField, todoLists, pendingNum, clearButton)

function allTasks() {
    let tasks = document.querySelectorAll('.pending');
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length; 
};

// Функция для сохранения задач в localStorage
function saveTasksToLocalStorage() {
    const tasks = Array.from(todoLists.children).map((task) => {
        return {
            text: task.querySelector('.task').textContent,
            isCompleted: task.classList.contains('completed') // Сохраняем статус
        };
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Функция для загрузки задач из localStorage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => {
        let liTag = `
            <li class="list ${task.isCompleted ? 'completed' : 'pending'}" onclick="handleStatus(this)">
                <input type="checkbox" ${task.isCompleted ? 'checked' : ''}>
                <span class="task">${task.text}</span>
                <i class="uil uil-trash" onclick="deleteTask(this)"></i>
            </li>`;
        todoLists.insertAdjacentHTML("beforeend", liTag);
    });
    allTasks();
}

// Добавление задачи
inputField.addEventListener('keyup', (e) => {

    let inputVal = inputField.value.trim();
    if (e.key === "Enter" && inputVal.length > 0) {

        // console.log('valid')
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
                <input type="checkbox">
                <span class="task">${inputVal}</span>
                <i class="uil uil-trash" onclick='deleteTask(this)'></i>
            </li>`;
        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = '';
        allTasks();
        saveTasksToLocalStorage(); // Сохранение задач после добавления
    }
});

// Обработка статуса задачи
function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = !checkbox.checked; // Переключение состояния
    e.classList.toggle("pending");
    e.classList.toggle("completed");
    allTasks();
    saveTasksToLocalStorage(); // Сохранение изменений статуса
}

// function handleStatus (e){
//     const checkbox = e.querySelector("input");
//     checkbox.checked = checkbox.checked ? false : true;
//     e.classList.toggle("pending")
//     allTasks();
// }

// Удаление задачи
function deleteTask(e) {
    e.parentElement.remove();
    allTasks();
    saveTasksToLocalStorage(); // Сохранение изменений после удаления
} 

// clearButton.addEventListener("click", ()=>{
//     todoLists.innerHTML='';
//     allTasks();
// })

// Очистка всех задач
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = ''; // Удаление всех задач
    allTasks();
    saveTasksToLocalStorage(); // Очистка localStorage
});

// Загрузка задач при загрузке страницы
window.addEventListener("load", loadTasksFromLocalStorage);


// const inputField = document.querySelector('.input-field textarea'),
//       todoLists = document.querySelector('.todoLists'),
//       pendingNum = document.querySelector('.pending-num'),
//       clearButton = document.querySelector('.clear-button');

// // Функция для обновления числа задач
// function allTasks() {
//     let tasks = document.querySelectorAll('.pending');
//     pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length; 
// }

// // Функция для сохранения задач в localStorage
// function saveTasksToLocalStorage() {
//     const tasks = Array.from(todoLists.children).map((task) => {
//         return {
//             text: task.querySelector('.task').textContent,
//             isCompleted: task.classList.contains('completed') // Сохраняем статус
//         };
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // Функция для загрузки задач из localStorage
// function loadTasksFromLocalStorage() {
//     const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//     tasks.forEach((task) => {
//         let liTag = `
//             <li class="list ${task.isCompleted ? 'completed' : 'pending'}" onclick="handleStatus(this)">
//                 <input type="checkbox" ${task.isCompleted ? 'checked' : ''}>
//                 <span class="task">${task.text}</span>
//                 <i class="uil uil-trash" onclick="deleteTask(this)"></i>
//             </li>`;
//         todoLists.insertAdjacentHTML("beforeend", liTag);
//     });
//     allTasks();
// }

// // Добавление задачи
// inputField.addEventListener('keyup', (e) => {
//     let inputVal = inputField.value.trim();
//     if (e.key === "Enter" && inputVal.length > 0) {
//         let liTag = ` 
//             <li class="list pending" onclick="handleStatus(this)">
//                 <input type="checkbox">
//                 <span class="task">${inputVal}</span>
//                 <i class="uil uil-trash" onclick="deleteTask(this)"></i>
//             </li>`;
//         todoLists.insertAdjacentHTML("beforeend", liTag);
//         inputField.value = '';
//         allTasks();
//         saveTasksToLocalStorage(); // Сохранение задач после добавления
//     }
// });

// // Обработка статуса задачи
// function handleStatus(e) {
//     const checkbox = e.querySelector("input");
//     checkbox.checked = !checkbox.checked; // Переключение состояния
//     e.classList.toggle("pending");
//     e.classList.toggle("completed");
//     allTasks();
//     saveTasksToLocalStorage(); // Сохранение изменений статуса
// }

// // Удаление задачи
// function deleteTask(e) {
//     e.parentElement.remove();
//     allTasks();
//     saveTasksToLocalStorage(); // Сохранение изменений после удаления
// }

// // Очистка всех задач
// clearButton.addEventListener("click", () => {
//     todoLists.innerHTML = ''; // Удаление всех задач
//     allTasks();
//     saveTasksToLocalStorage(); // Очистка localStorage
// });

// // Загрузка задач при загрузке страницы
// window.addEventListener("load", loadTasksFromLocalStorage);
