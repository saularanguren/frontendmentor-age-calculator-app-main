import { clearDataOld } from "../use-cases/clearCompleted"

export const functionPresentatioProyect = () => {
      const messageInputs = ['24', '09', '1984'],
            messageContainers = ['38', '3', '26']

      document.querySelectorAll('input').forEach((input, index) => {
            (index < messageInputs.length) ? input.value = `${messageInputs[index]}` : console.log('Error Data Old')
      })

      document.querySelectorAll('.info-output').forEach((container, index) => {
            (index < messageContainers.length) ? container.textContent = `${messageContainers[index]}` : console.log('Error Data Old')
      })

      setTimeout(() => { clearDataOld() }, 2000);
}   
