document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const videoPopup = document.getElementById('video-popup');
    const popupVideo = document.getElementById('popup-video');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    document.querySelectorAll('.play-btn').forEach(button => {
        button.addEventListener('click', function() {
            const videoSrc = button.getAttribute('data-video');
            popupVideo.src = videoSrc;
            videoPopup.classList.add('active');
            popupVideo.play();
            if (popupVideo.requestFullscreen) {
                popupVideo.requestFullscreen();
            } else if (popupVideo.webkitRequestFullscreen) { /* Safari */
                popupVideo.webkitRequestFullscreen();
            } else if (popupVideo.msRequestFullscreen) { /* IE11 */
                popupVideo.msRequestFullscreen();
            }
        });
    });

    videoPopup.addEventListener('click', function(event) {
        if (event.target === videoPopup) {
            videoPopup.classList.remove('active');
            popupVideo.pause();
            popupVideo.currentTime = 0;
        }
    });

    popupVideo.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement) {
            screen.orientation.lock('landscape');
        }
    });
});
