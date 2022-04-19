input.onSound(DetectedSound.Loud, function () {
    music.setVolume(255)
    basic.showIcon(IconNames.Heart)
})
input.onSound(DetectedSound.Quiet, function () {
    music.setVolume(100)
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
	
})
