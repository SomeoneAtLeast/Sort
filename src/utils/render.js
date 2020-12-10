export const RenderPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`,
};


export const render = (container, template, place) => {
    switch (place) {
        case RenderPosition.AFTERBEGIN:
            container.prepend(template.getElement());
            break;
        case RenderPosition.BEFOREEND:
            container.append(template.getElement());
            break;
    };
};

export const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement.firstChild;
};

export const remove = (template) => {
    template.getElement().remove();
    template.removeElement();
  };