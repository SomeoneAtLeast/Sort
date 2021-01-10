import Board from "./components/board.js";
import BoardController from "./controllers/board-controller.js";
import SortBlock from "./components/sort-block.js";
import {RenderPosition, render} from "./utils/render.js";

// количество блоков

let blockСount = 8;

// Контроллер доски

const BoardControllerClass = new BoardController;
BoardControllerClass.render();

// Доска 

const board = document.querySelector(`.board`);
const boardClass = new Board(board);

// блоки

const renderBlock = () => {
    render(board, new SortBlock, RenderPosition.BEFOREEND);
};

for (let i = 0; i < blockСount; i++) {
    renderBlock();
};

// Удаление блока 
const BoardControllerClassBoard = new BoardController (board);
BoardControllerClassBoard.DelBlock();


// Обработчик сортировки 

boardClass.setSortTypeChangeHandler(boardClass);