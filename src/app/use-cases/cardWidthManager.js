export const updateInfoBasedOnCardWidth = () => {
    const card = document.querySelector('.card');
    const cardWidth = card.getBoundingClientRect().width;
    const outputInfos = document.querySelectorAll('.info-output');
    
    if (cardWidth >= 500) {
        outputInfos.forEach(info => {
            if(info.textContent == '- -' || info.textContent == '--' || info.textContent == '') {
                info.textContent = '- -'
            }
        })
    } else {
        outputInfos.forEach(info => {
            if(info.textContent == '- -' || info.textContent == '--' || info.textContent == '') {
                info.textContent = '--'
            }
        })
    }
}