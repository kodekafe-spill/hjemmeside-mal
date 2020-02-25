/*dette scriptet sikrer at alt innhold er lastet før det er mulig å klikke i navbaren*/
/*det gir også funksjon til toggle-knappen slik at navbar på liten skjerm vises når man klikker på "hamburger" symbolet i header*/

document.addEventListener("readystatechange", event => {
  if (event.target.readyState === "interactive") {
    let mainNav = document.getElementById("js-menu");
    let navBarToggle = document.getElementById("js-navbar-toggle");

    navBarToggle.addEventListener("mousedown", function() {
      mainNav.classList.toggle("active");
    });
  }
});
