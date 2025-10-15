let tekst = ""
let temp = 0
let newTemp = 0
serial.redirect(
SerialPin.P0,
SerialPin.P16,
BaudRate.BaudRate9600
)
basic.forever(function () {
    newTemp = input.temperature() - 4
    if (newTemp != temp) {
        tekst = "" + newTemp + "*C"
        serial.writeString(tekst)
        control.waitMicros(10000)
        temp = newTemp
    }
})
