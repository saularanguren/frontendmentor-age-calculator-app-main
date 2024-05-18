export const activeModeError = () => {
    let inputs = document.querySelectorAll('.input'),
        textos = document.querySelectorAll('.info')

    inputs.forEach(input => input.classList.add('error-input'))
    textos.forEach(texto => texto.classList.add('error-text'))
}

export const desactiveModeError = () => {
    let inputs = document.querySelectorAll('.input'),
        textos = document.querySelectorAll('.info')

    inputs.forEach(input => input.classList.remove('error-input'))
    textos.forEach(texto => texto.classList.remove('error-text'))
}