let 配列 = [300, 300]
let zero = 0
basic.forever(function () {
    for (let vero of 配列) {
        basic.showLeds(`
            . # . . .
            # # # # #
            . # . . #
            . . . . #
            . . . # #
            `)
        pins.analogWritePin(AnalogPin.P16, vero)
        basic.pause(5000)
    }
    pins.analogWritePin(AnalogPin.P16, zero)
    basic.pause(1000)
    for (let vero of 配列) {
        basic.showLeds(`
            . . . # .
            # # # # #
            # . . # .
            # . . . .
            # # . . .
            `)
        pins.analogWritePin(AnalogPin.P16, vero)
        basic.pause(5000)
    }
    pins.analogWritePin(AnalogPin.P16, zero)
    basic.pause(1000)
})
