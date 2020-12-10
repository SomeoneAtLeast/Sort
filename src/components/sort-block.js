import AbstarctComponent from "./abstract-component.js";

const sortBlockTemplate = () => {
   return (
    `<article class="sort-block">

    </article>`
   ) 
};

export default class SortBlock extends AbstarctComponent {
    constructor() {
      super();
    };

    getTemplate () {
        return sortBlockTemplate();
    };
};

