radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.setPixelColor(3, 0xFF0000)
        bitbot.rotatems(BBRobotDirection.Left, 60, 200)
    } else if (receivedNumber == 2) {
        bitbot.setPixelColor(9, 0xFF0000)
        bitbot.rotatems(BBRobotDirection.Right, 60, 200)
    } else if (receivedNumber == 3) {
        bitbot.setPixelColor(5, 0xFF0000)
        bitbot.setPixelColor(11, 0xFF0000)
        bitbot.go(BBDirection.Forward, 60)
    } else if (receivedNumber == 4) {
        bitbot.setPixelColor(0, 0xFF0000)
        bitbot.setPixelColor(6, 0xFF0000)
        bitbot.go(BBDirection.Forward, 60)
    } else {
        bitbot.go(BBDirection.Forward, 0)
    }
    bitbot.ledClear()
})
radio.setGroup(1)
basic.showNumber(1)
