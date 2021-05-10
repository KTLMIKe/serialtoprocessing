input.onGesture(Gesture.TiltLeft, function () {
    R = false
    L = true
    while (L == true) {
        serial.writeLine("L")
        basic.pause(0.1)
    }
})
input.onButtonPressed(Button.A, function () {
    L = false
    R = true
    while (R == true) {
        serial.writeLine("R")
        basic.pause(0.1)
    }
})
input.onGesture(Gesture.Shake, function () {
    R = false
    L = false
})
input.onGesture(Gesture.ScreenUp, function () {
    R = false
    L = false
})
input.onButtonPressed(Button.B, function () {
    R = false
    L = true
    while (L == true) {
        serial.writeLine("L")
        basic.pause(0.1)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    L = false
    R = true
    while (R == true) {
        serial.writeLine("R")
        basic.pause(0.1)
    }
})
let L = false
let R = false
serial.redirectToUSB()
serial.writeLine("started")
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
