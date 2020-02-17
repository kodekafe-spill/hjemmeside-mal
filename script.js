
document.addEventListener('readystatechange', event => {

    if (event.target.readyState === "interactive") {
        let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById("js-navbar-toggle");

        navBarToggle.addEventListener('mousedown', function () {
        mainNav.classList.toggle('active');
        });
    }
});

