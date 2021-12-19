import { emit, on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchForm]";

export default class SearchForm extends View {
  constructor() {
    console.log(tag, 'constructor');
    super(qs("#search-form"))

    this.inputElement = qs("[type=text]", this.element)
    this.resetElement = qs("[type=reset]", this.element)

    this.showResetButton(false);
    this.bindEvents();
  }
  showResetButton(visible = true){
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvents(){
    on(this.inputElement, "keyup", () => this.handleKeyup())
    this.on("submit", (e) => this.handleSubmit(e))
    this.on("reset", () => this.handleReset())
  }

  handleKeyup() {
    const {value} = this.inputElement;
    this.showResetButton(value.length > 0)

    if(value.length <= 0) {
      this.handleReset();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const {value} = this.inputElement;
    this.emit("@submit", {value})
  }

  handleReset(){
    this.emit("@reset")
  }
  
}