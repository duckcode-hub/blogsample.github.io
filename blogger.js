
// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = ''; // Required for most modern browsers
//     // window.location.replace("index.html"); // Uncomment if you handle redirection elsewhere
// });

// Nav Background
let header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", function() {
        header.classList.toggle("shadow", window.scrollY > 0);
    });
} else {
    console.warn('Header element not found.');
}

// Filter Functionality
$(document).ready(function() {
    $(".filter-item").click(function() {
        const value = $(this).data('filter');
        console.log('Filter value:', value); // Debugging line

        if (value === "all") {
            $(".post-box").show('1000');
        } else {
            $(".post-box").not('.' + value).hide('1000');
            $(".post-box").filter('.' + value).show('1000');
        }

        // Add active class to the clicked filter
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});
