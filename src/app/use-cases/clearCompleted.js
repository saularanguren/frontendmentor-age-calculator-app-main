import { desactiveModeError } from "../error-handling/modeError"
import { clearInputsBasedOnCardWidth } from "../utils/clearInputAndOutput"

export const clearInputsText = () => {
    const message = document.querySelectorAll('span'),
          arrayInputs = document.querySelectorAll('input'),
          arrayContainers = document.querySelectorAll('.info-output')
    
    arrayInputs.forEach(input => {
        input.addEventListener('click', () => {
            // * clear input individually *
            input.value = ''

            // * cleaning of all containers and inputs *
            clearInputsBasedOnCardWidth(arrayContainers, arrayInputs)

            //* removed error mode
            desactiveModeError()
            message.forEach(mes => mes.textContent = ``)
        })
    })

    arrayInputs.forEach(input => input.addEventListener('input', () => {
        desactiveModeError()
        document.querySelectorAll('span').forEach(sp => sp.textContent = '')
    }))
}

export const clearDataOld = () => {
    document.querySelectorAll('input').forEach(input => input.value = '')
    document.querySelectorAll('.info-output').forEach(container => container.textContent = '--')
}