export const clearInputsBasedOnCardWidth = (arrayContainers, arrayInputs) => {
    const card = document.querySelector('.card')
    const cardWidth = card.getBoundingClientRect().width
    
    if (cardWidth >= 500) {
        arrayContainers.forEach(container => {
            if(container.textContent != '- -') {  
                container.textContent = '- -'
                
                for(let i = 0; i < arrayInputs.length; i++) {
                    arrayInputs[i].value = ''
                }
            }
        })
    } else {
        arrayContainers.forEach(container => {
            if(container.textContent != '--') {   
                container.textContent = '--' 

                for(let i = 0; i < arrayInputs.length; i++) {
                    arrayInputs[i].value = ''
                }
            }
        })
    }
}