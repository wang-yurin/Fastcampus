export class Keyboard {
  #switchEl;
  #fontSelectEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.querySelector("#switch");
  }

  #addEvent() {
    this.#switchEl.addEventListener("click", (event) => {
      //   console.log(event.target.checked);
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
  }
}
