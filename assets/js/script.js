// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {
    var root = document.getElementById("root");

    var switchToggle = document.getElementById("switch-toggle");

    switchToggle.addEventListener('change', toggleMode)

    function toggleMode() {
        root.classList.add("switching-mode");
        if (switchToggle.checked) {
            root.classList.add("dark-mode");
            root.classList.remove("light-mode");
        }
        
        else {
            root.classList.add("light-mode");
            root.classList.remove("dark-mode");
        }

        setTimeout(function() {
            root.classList.remove("switching-mode");
        }, 1400)

    }

    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', navbarPosition);

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navbarPosition() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

})