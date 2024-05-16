export const dictionaryToMonths = (month, year) => {
    let counter = 0;

    const monthsDictionary = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }

    if(monthsDictionary[month] == 'January' || monthsDictionary[month] == 'March' || monthsDictionary[month] == 'May' || monthsDictionary[month] == 'July' ||  monthsDictionary[month] == 'August' || monthsDictionary[month] == 'October' || monthsDictionary[month] =='December') {
        counter += 31
    } 
    
    if(monthsDictionary[month] == 'April' || monthsDictionary[month] == 'June'|| monthsDictionary[month] == 'September' || monthsDictionary[month] == 'November') {
        counter += 30
    } 
    
    if(monthsDictionary[month] == 'February'){
        counter += 28
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) counter++
    }

    return counter
}