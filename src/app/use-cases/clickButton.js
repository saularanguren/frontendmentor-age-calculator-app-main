import { dictionaryToMonths } from "../dictionaries/dictionaryDaysToMonths"
import { textInputValidation } from "../error-handling/errorHandling"

//* system data variables *
const date = new Date(),
      year = date.getFullYear(),
      month  = date.getMonth(),
      day = date.getDate()

const entryVerification = () => {
    
    //! Error Headlign !
    if(textInputValidation() === true) {

        //* Containers Html *
        const containerYear = document.querySelector('#p-year'),
              containerMonths = document.querySelector('#p-months'),
              containerDays = document.querySelector('#p-days'),
        //* Inputs type Text *
              inputDay = document.querySelector('#day'),
              inputMonth = document.querySelector('#month'),
              inputYear = document.querySelector('#year')
        
        //* logic for the results to be returned *
        let resultYears = year - inputYear.value,
            resultMonths = (month - inputMonth.value) + 1,
            resultDays

        //* Exceptions to consider in return values, return value of day *
        if((month + 1) == inputMonth.value) {
            resultDays = day - inputDay.value
        } else {
            let resultDictionary = dictionaryToMonths(month, year)
            resultDays = (resultDictionary - day) + parseInt(inputDay.value)
        }

        //* Exceptions to consider in return values, negative values * 
        if(resultMonths < 0) resultMonths = Math.abs(resultMonths)
        if(resultDays < 0) resultDays = Math.abs(resultDays)
            
        //* Exceptions to consider in return values, return value of the year *
        if(inputMonth.value > month) resultYears--
        if(inputMonth.value == (month + 1) && inputDay.value <= day) resultYears++
        resultMonths--

        //* render data *
        const arrayContainers = [containerDays, containerMonths, containerYear],
              arrayResults = [resultDays, resultMonths, resultYears]

        arrayContainers.forEach((input, index) => input.textContent = `${arrayResults[index]}`)
    } else if(textInputValidation() === false) {
        throw new Error("Error...")
    }
}

export const clickInButton = () => {
    const click = document.querySelector('#btn')
    //* Manual click event on the button *
    click.addEventListener('click', () => entryVerification())
    //* Event with enter button *
    document.addEventListener('keydown', (event) => {if(event.key === 'Enter') entryVerification() })
}
