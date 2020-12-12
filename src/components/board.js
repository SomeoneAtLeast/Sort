import AbstarctComponent from "./abstract-component.js";

const boardTemplate = () => {
   return (
    `<section class="board">

    </section>`
   );
};

export default class Board extends AbstarctComponent {
    constructor() {
      super();
    };

    getTemplate () {
        return boardTemplate();
    };

    setSortTypeChangeHandler(hendler) {
      this.getElement().addEventListener(`click`, (evt) => {
        evt.preventDefault();

        if (evt.target.tagName !== "article") {
          return;
        }
      });
    };
};

