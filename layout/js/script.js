navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    const videoContainer = document.querySelector('.video-grid');
    const video = document.createElement('video');
    video.muted = true;
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoContainer.append(video);
})