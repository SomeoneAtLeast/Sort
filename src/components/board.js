import AbstarctComponent from "./abstract-component.js";

const boardTemplate = () => {
   return (
    `<section class="board">

    </section>`
   );
};

export default class Board extends AbstarctComponent {
    constructor(targetBlock) {
      super();

      this.targetBlock = targetBlock;
    };

    getTemplate () {
        return boardTemplate();
    };

    setSortTypeChangeHandler() {
      console.log(this.targetBlock);
      
      this.targetBlock.addEventListener(`click`, (evt) => {
        evt.preventDefault();
    
        if (evt.target.tagName !== "ARTICLE") {
          return;
        }
    
        alert("kek")
      });
    };
};

