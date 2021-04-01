/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
}


// need to fix the scroll function so that it works with the div
// window.onscroll = function() {
//     var about = document.getElementById('homeAbout');
//     var preview = document.getElementById('homePreview');
//     var recent = document.getElementById('homeRecent');
//     if ( window.pageYOffset > 1000 ) {
//         preview.classList.add("active");
//         preview.classList.remove("inactive");
//     } else {
//         preview.classList.remove("active");
//     }
// }

function divScroll() {
    var elmnt = document.getElementById("mainContent");
    var about = document.getElementById('homeAbout');
    var preview = document.getElementById('homePreview');
    var recent = document.getElementById('homeRecent');

    if (elmnt.scrollTop < 399) {
        about.classList.add("active");
        about.classList.remove("inactive");
        preview.classList.add("inactive");
        preview.classList.remove("active");
        recent.classList.add("inactive");
        recent.classList.remove("active");
    }
    if (elmnt.scrollTop > 399 && elmnt.scrollTop < 899) {        
        about.classList.add("inactive");
        about.classList.remove("active");
        preview.classList.add("active");
        preview.classList.remove("inactive");
        recent.classList.add("inactive");
        recent.classList.remove("active");
    } else if (elmnt.scrollTop > 899) {
        about.classList.add("inactive");
        about.classList.remove("active");
        preview.classList.add("inactive");
        preview.classList.remove("active");
        recent.classList.add("active");
        recent.classList.remove("inactive");
    }
}