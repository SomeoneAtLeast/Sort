import Board from "./components/board.js";
import SortBlock from "./components/sort-block.js";
import {RenderPosition, render, createElement, remove} from "./utils/render.js";

// количество блоков

let blockСount = 8;

// main страницы

const siteMain = document.querySelector(`.main`);

// доска с блоками

render(siteMain, new Board, RenderPosition.BEFOREEND);
const boardClass = new Board;
const board = document.querySelector(`.board`);

// блоки

for (let i = 0; i < blockСount; i++) {
    render(board, new SortBlock, RenderPosition.BEFOREEND);
};

// board.addEventListener(`click`, function() {

// });

boardClass.setSortTypeChangeHandler(() => {

});