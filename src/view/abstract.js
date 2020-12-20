import {createElement} from "../utils/render.js";

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Abstract class cannot be replicated, use inherited classes instead.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
