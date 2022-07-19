export class Keyboard {
  #switchEl;
  #fontSelectEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.querySelector("#switch");
    this.#fontSelectEl = document.querySelector("#font");
  }

  #addEvent() {
    this.#switchEl.addEventListener("click", (event) => {
      //   console.log(event.target.checked);
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
    this.#fontSelectEl.addEventListener("change", (event) => {
      //   console.log(event.target.value);
      document.documentElement.style.fontFamily = event.target.value;
    });
  }
}
