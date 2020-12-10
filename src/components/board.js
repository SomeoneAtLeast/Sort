import {createElement} from "../utils/render.js";


const boardTemplate = () => {
   return (
    `<section class="board">
        <h1>Kek</h1>
    </section>`
   ) 
};

export default class Board {
    constructor() {
        this._element = null;
    }

    getTemplate () {
        return boardTemplate();
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

