let BRILLO = 0
basic.forever(function () {
    led.setBrightness(BRILLO)
    BRILLO = input.lightLevel()
    if (input.lightLevel() < 125) {
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
        basic.pause(50)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
