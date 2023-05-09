const display = document.querySelector('#calcLcd')
const buttons = document.querySelectorAll('button')

let berechnung = []
let kumulativeBerechnung

function rechne(button) {
    //console.log(button)
    const value = button.textContent
    if (value === "C") {
        berechnung = []
        display.textContent = ''
    } else if (value === '=') {
        display.textContent = eval(kumulativeBerechnung)
    } else {
        berechnung.push(value)
        kumulativeBerechnung = berechnung.join('')
        display.textContent = kumulativeBerechnung
        //console.log(berechnung)
    }
}

buttons.forEach(button => button.addEventListener('click', () => rechne(button)))