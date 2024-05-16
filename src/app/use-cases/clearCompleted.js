import { desactiveModeError } from "./modeError"



export const clearInputsText = () => {
    const message = document.querySelectorAll('span'),
          arrayInputs = document.querySelectorAll('input'),
          arrayContainers = document.querySelectorAll('.info-output')
    
    arrayInputs.forEach(input => {
        input.addEventListener('click', () => {
            input.value = ''

            arrayContainers.forEach(container => {
                if(container.textContent != '--') {
                    // * cleaning of all containers and inputs *
                    container.textContent = '--'
                                    
                    for(let i = 0; i < arrayInputs.length; i++) {
                        arrayInputs[i].value = ''
                    }
                }
            })

            //* Removed error mode
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
    document.querySelectorAll('.info-output').forEach(paragraph => paragraph.textContent = '--')
}