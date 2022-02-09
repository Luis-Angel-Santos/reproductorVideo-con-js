var video = document.getElementById('video');
var play = document.getElementById('iniciar');
var load = document.getElementById('recargar');
var max = document.getElementById('maximizar');
var silence = document.getElementById('silenciar');
var volumen = document.getElementById('volumen');
var volumenS = document.getElementById('volumenS');
video.volume = 1;

play.addEventListener('click', () => {
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
});

load.addEventListener('click', () => {
    video.load(); 
});

max.addEventListener('click', () => {
    video.requestFullscreen(); 
})

silence.addEventListener('click', () => {
    if(video.muted == false)
        video.muted = true;
    else
        video.muted = false;  
})

volumenS.addEventListener('click', () => {
    video.volume = 1;
})

volumen.addEventListener('click', () => {
    video.volume = 0.1;
})