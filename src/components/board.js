import { RenderPosition } from "../../../Kinoman/src/utils/render";

const boardTemplate = () => {
    `<section class="board">
        <h1>Kek</h1>
    </section>`
};

export default class Board {
    getTemplate () {
        return boardTemplate;
    };
};


// export const render = (container, template, place) => {
//     switch (place) {
//         case RenderPosition.AFTERBEGIN:
//             container.prepend(template.te);
//     }
// };





// export const render = (container, component, place) => {
//     switch (place) {
//       case RenderPosition.AFTERBEGIN:
//         container.prepend(component.getElement());
//         break;
//       case RenderPosition.BEFOREEND:
//         container.append(component.getElement());
//         break;
//     }
// };