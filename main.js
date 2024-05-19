import './src/css/style.css'
import cardElementHtml from './src/app/pages/card.html?raw'
import iconArrow from './src/assets/images/icon-arrow.svg'
import { functionRenderElementsHtml } from './src/app/render-html/renderElementsHtml'
import { clearInputsText } from './src/app/use-cases/clearCompleted'
import { clickInButton } from './src/app/use-cases/clickButton'
import { autoFocusInputs } from './src/app/use-cases/autoFocusInputs'
import { updateInfoBasedOnCardWidth } from './src/app/use-cases/cardWidthManager'

//* principal function *
functionRenderElementsHtml('#app', cardElementHtml)
document.querySelector('img').src = `${iconArrow}`

//* secondary functions *
autoFocusInputs()
clearInputsText()
clickInButton()

//* observer *
setInterval(updateInfoBasedOnCardWidth, 100);