import Board from "./../components/board.js";
import SortBlock from "./../components/sort-block.js";
import {RenderPosition, render} from "./../utils/render.js";


export default class BoardController {
    constructor(board) {

        this.siteMain = document.querySelector(`.main`);
        this.board = board;
    };

    render() {

        // Рендер доски

        render(this.siteMain, new Board, RenderPosition.BEFOREEND);
    };

    // Удаление блока
    
    DelBlock () {
        this.board.addEventListener(`click`, (evt) => {
            if (evt.target.tagName !== "ARTICLE") {
                    return;
            }

            evt.target.remove();
        })
     };
};

