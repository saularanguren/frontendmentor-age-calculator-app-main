export const functionRenderElementsHtml = ( elementBody, elementHtml ) => {
    const bodyElementHtml = document.querySelector(elementBody);
    return bodyElementHtml.innerHTML = elementHtml;
}