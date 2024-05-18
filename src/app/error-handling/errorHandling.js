import { errorPhraseDictionary } from "../dictionaries/errorDictionary"
import { activeModeError } from "./modeError"

export const textInputValidation = () => {
    const arrayInputs = document.querySelectorAll('input')

    let day = arrayInputs[0].value,
        month = arrayInputs[1].value,
        year = arrayInputs[2].value,
        data = new Date(),
        fullYear = data.getFullYear()

    if(day !== '' && month !== '' && year !== '') {
        if(day > 31 && month > 12 && year > fullYear) {
            activeModeError()

            document.querySelector('.--day span').textContent = `${errorPhraseDictionary[1]}`
            document.querySelector('.--month span').textContent = `${errorPhraseDictionary[2]}`
            document.querySelector('.--year span').textContent = `${errorPhraseDictionary[3]}`

            return false
        }

        //! Error Day !
        if( (day <= 0) || (day > 31)) {
            document.querySelector('.--day .info').classList.add('.error-text')
            document.querySelector('.--day .input').classList.add('.error-input')
            document.querySelector('.--day span').textContent = `${errorPhraseDictionary[1]}`

            return false
            
        //! Error Month !    
        } else if( (month <= 0) || (month > 12) ) {
            document.querySelector('.--month .info').classList.add('.error-text')
            document.querySelector('.--month .input').classList.add('.error-input')
            document.querySelector('.--month span').textContent = `${errorPhraseDictionary[2]}`
        
            return false
        
        //! Error Year !
        } else if((year <= 0) || (year > fullYear) || year.length < 4) {
            document.querySelector('.--year .info').classList.add('.error-text')
            document.querySelector('.--year .input').classList.add('.error-input')
            document.querySelector('.--year span').textContent = `${errorPhraseDictionary[3]}`
        
            return false
     
        //! Error months with less than 31 days !
        } else if(day == 31) {

            if(month == 4 || month == 6 || month == 9 || month == 11 || month == 2) {
                document.querySelector('.--day .info').classList.add('.error-text')
                document.querySelector('.--day .input').classList.add('.error-input')
                document.querySelector('.--day span').textContent = `${errorPhraseDictionary[5]}`

                return false
            }

        //! Default !
        } else {
            return true
        }
    }

    //! Error you must fill in all fields !
    if( day === '' && month === '' && year === '') {
        activeModeError()
        let message = document.querySelectorAll('span')
        message.forEach(mes => mes.textContent = `${errorPhraseDictionary[4]}`)

        return false
    }
}