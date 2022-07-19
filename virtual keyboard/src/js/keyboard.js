export class Keyboard {
  #switchEl;
  #fontSelectEl;
  #containerEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    //처음 document에서부터 탐색한 걸 container부터 탐색하는 걸로 변경하여 비용 절감
    this.#containerEl = document.querySelector(".container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
  }

  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }
  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
}
