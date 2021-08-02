let playBtn = document.querySelector('#playBtn')
let stopBtn = document.querySelector('#stopBtn')
let volumebtn = document.querySelector('#volumebtn')


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#353A5D',
    progressColor: '#8CC78C',
    barWidth:4,
    height:90,
    responsive: true,
    hideScrollbar: true
});

wavesurfer.load('media/song.mp3');

playBtn.onclick = function() {
    wavesurfer.playPause()

    if(playBtn.src.includes('pause.png')) {
        playBtn.src = 'images/play.png'
    } else {
        playBtn.src = 'images/pause.png'
    }
}

stopBtn.onclick = function() {
    wavesurfer.stop()
}

volumebtn.onclick = function() {
    wavesurfer.toggleMute()

    if(volumebtn.src.includes('volume.png')) {
        volumebtn.src = 'images/mute.png'
    } else {
        volumebtn.src = 'images/volume.png'
    }
}