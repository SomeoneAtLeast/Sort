import Board from "./components/board.js";
import {RenderPosition, render, createElement, remove} from "./utils/render.js";

const siteMain = document.querySelector(`.main`);

render(siteMain, new Board, RenderPosition.BEFOREEND);