// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {
  
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', navbarPosition);

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    var switchToggle = document.getElementById("switch-toggle");


    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navbarPosition() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    function toggleMode(){
        if (switchToggle.checked) {

        }

        else {

        }

    }
})