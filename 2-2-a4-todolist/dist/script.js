// 初始變數
const list = document.querySelector("#my-todo");
const done = document.querySelector("#my-done");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式(todo)
function addItem(text) {
  if (text.length === 0) return;
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}
// 函式(todo)
function moveToDone(text) {
  let newDone = document.createElement("li");
  newDone.innerHTML = `
    <label for="todo" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  done.appendChild(newDone);
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();
  addItem(inputValue);
});

input.addEventListener("keydown", function (e) {
  const inputValue = input.value.trim();
  if (e.key === "Enter") {
    addItem(inputValue);
  }
});

// Delete and check
list.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    let parentDelete = target.parentElement;
    parentDelete.remove();
  } else if (target.tagName === "LABEL") {
    let parentLabel = target.parentElement;
    parentLabel.remove();
    moveToDone(target.innerText);
  }
});

done.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList.contains("delete")) {
    let parentDelete = target.parentElement;
    parentDelete.remove();
  } else if (target.tagName === "LABEL") {
    let parentLabel = target.parentElement;
    parentLabel.remove();
    addItem(target.innerText);
  }
});