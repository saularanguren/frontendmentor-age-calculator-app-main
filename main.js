import './src/css/style.css'
import cardElementHtml from './src/app/pages/card.html?raw'
import { functionRenderElementsHtml } from './src/app/use-cases/renderElementsHtml'
import { clearInputsText } from './src/app/use-cases/clearCompleted'
import { clickInButton } from './src/app/use-cases/clickButton'
import { autoFocusInputs } from './src/app/use-cases/autoFocusInputs'
import { functionPresentatioProyect } from './src/app/use-cases/presentation'

//* principal function *
functionRenderElementsHtml('#app', cardElementHtml)
document.addEventListener("DOMContentLoaded", functionPresentatioProyect);

//* secondary functions *
autoFocusInputs()
clearInputsText()
clickInButton()