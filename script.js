document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const videoPopup = document.getElementById('video-popup');
    const popupVideo = document.getElementById('popup-video');
    const main = document.querySelector('main');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        main.classList.toggle('active');
    });

    document.querySelectorAll('.play-btn').forEach(button => {
        button.addEventListener('click', function() {
            const videoSrc = button.getAttribute('data-video');
            popupVideo.src = videoSrc;
            videoPopup.classList.add('active');
            popupVideo.play();
            popupVideo.requestFullscreen().then(() => {
                screen.orientation.lock('landscape');
            });
        });
    });

    videoPopup.addEventListener('click', function(event) {
        if (event.target === videoPopup) {
            videoPopup.classList.remove('active');
            popupVideo.pause();
            popupVideo.currentTime = 0;
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        }
    });

    popupVideo.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
            screen.orientation.unlock();
        }
    });
});
