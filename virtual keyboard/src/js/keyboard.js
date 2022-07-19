export class Keyboard {
  #switchEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    //처음 document에서부터 탐색한 걸 container부터 탐색하는 걸로 변경하여 비용 절감
    this.#containerEl = document.querySelector(".container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector(".keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector(".input-group");
    this.#inputEl = this.#inputGroupEl.querySelector(".input");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown", this.#onKeyDown.bind(this));
    document.addEventListener("keyup", this.#onKeyUp.bind(this));
    this.#inputEl.addEventListener("input", this.#onInput);
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
  #onInput(event) {
    //   console.log(this.#inputEl.value);
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
  }
  #onKeyDown(event) {
    // console.log(event.code);
    // console.log(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)); //한글이면 true, 영문이면 false
    this.#inputGroupEl.classList.toggle(
      "error",
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)
    );

    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add("active");
  }
  #onKeyUp(event) {
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove("active");
  }
}
