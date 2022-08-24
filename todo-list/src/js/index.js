import "../scss/style.scss";
import "@fortawesome/fontawesome-free/js/all.min.js";

class TodoList {
  constructor() {
    this.assignElement();
    this.addEvent();
  }
  assignElement() {
    this.inputContainerEl = document.getElementById("input-container");
    this.inputAreaEl = this.inputContainerEl.querySelector("#input-area");
    this.todoInputEl = this.inputAreaEl.querySelector("#todo-input");
    this.addBtnEl = this.inputAreaEl.querySelector("#add-btn");
  }
  addEvent() {
    this.addBtnEl.addEventListener("click", this.onClickAddBtn.bind(this));
  }

  onClickAddBtn() {
    if (this.todoInputEl.value.length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }

    this.createTodoElement(this.todoInputEl.value.length);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const todoList = new TodoList();
});
