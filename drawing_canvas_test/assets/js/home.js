/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
}


// window.onscroll = function() {
//     var header = document.getElementById("header");
//     var elmnt = document.getElementById("mainContent");
//     var x = header.scrollLeft;
//     var y = window.scrollY;
    
//     if (window.scrollY > 1300) {
//             // document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
//         elmnt.style.overflow = "scroll";
//     } else {
//         elmnt.style.overflow = "hidden";
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
    if (elmnt.scrollTop > 399 && elmnt.scrollTop < 900) {        
        about.classList.add("inactive");
        about.classList.remove("active");
        preview.classList.add("active");
        preview.classList.remove("inactive");
        recent.classList.add("inactive");
        recent.classList.remove("active");
    } else if (elmnt.scrollTop > 900) {
        about.classList.add("inactive");
        about.classList.remove("active");
        preview.classList.add("inactive");
        preview.classList.remove("active");
        recent.classList.add("active");
        recent.classList.remove("inactive");
    }
}