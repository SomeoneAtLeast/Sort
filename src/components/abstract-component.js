import {createElement} from "../utils/render.js";

export default class AbstarctComponent {
    constructor() {
        this._element = null;
    };

    getElement() {
        if (!this._element) {
          this._element = createElement(this.getTemplate());
        };
    
        return this._element;
      };

    removeElement() {
        this._element = null;
    };
};