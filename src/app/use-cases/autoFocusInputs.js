export const autoFocusInputs = () => {
    //* Array de Inputs Text *
    const inputs = document.querySelectorAll('.input')

    //* Validation Input full, for next input
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if(this.value.length === 2) {
                if(index < inputs.length - 1) {
                    inputs[index + 1].focus()
                }
            }
        })
    })
}