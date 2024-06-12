document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const video = this.nextElementSibling;
            video.style.display = 'block';
            video.play();
            this.style.display = 'none';
        });
    });
});
