// nav bar
function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline") {
    x.style.display = "none";
    } else {
    x.style.display = "inline";
    }
}

function choiceHover(x) {
    var header = document.getElementById("colourHead");
    var copy = document.getElementById("colourCopy");
    // x.style.filter = "blur(5px)";
    copy.style.width = "42%";
    x.style.width = "200px";
    x.style.height = "200px";
    if (x === document.getElementById("red")){
        $('#purple').css("filter", "blur(50px)");
        $('#blue').css("filter", "blur(50px)");
        $('#orange').css("filter", "blur(50px)");
        $('#yellow').css("filter", "blur(50px)");
        $('#green').css("filter", "blur(50px)");
        header.innerHTML = "Red";
        copy.innerHTML = "Taking the form of love, passion, anger, and even luck, this is an intense colour associated with powerful emotions. Choose red to express your most fierce dreams.";
    } else if (x === document.getElementById("green")) {
        $('#purple').css("filter", "blur(50px)");
        $('#blue').css("filter", "blur(50px)");
        $('#orange').css("filter", "blur(50px)");
        $('#yellow').css("filter", "blur(50px)");
        $('#red').css("filter", "blur(50px)");
        header.innerHTML = "Green";
        copy.innerHTML = "Linked to the elements of nature, growth, and wealth, this is a balanced colour that can be energetic or stable depending on the shade. Choose green to frame your calming or vibrant dreams.  ";
    } else if (x === document.getElementById("orange")) {
        $('#purple').css("filter", "blur(50px)");
        $('#blue').css("filter", "blur(50px)");
        $('#red').css("filter", "blur(50px)");
        $('#yellow').css("filter", "blur(50px)");
        $('#green').css("filter", "blur(50px)");
        header.innerHTML = "Orange";
        copy.innerHTML = "Associated with energy, warmth, enjoyment and balance, this is a friendlier hue within the warm colour specturm. Choose orange to share your most lively dreams.";
    } else if (x === document.getElementById("yellow")) {
        $('#purple').css("filter", "blur(50px)");
        $('#blue').css("filter", "blur(50px)");
        $('#orange').css("filter", "blur(50px)");
        $('#red').css("filter", "blur(50px)");
        $('#green').css("filter", "blur(50px)");
        header.innerHTML = "Yellow";
        copy.innerHTML = "A messenger of happiness, courage deceipt, and stability, —while also a symbol of hope or danger—, this is a colour that commands attention. Choose yellow to capture your most striking dreams.";
    } else if (x === document.getElementById("blue")) {
        $('#purple').css("filter", "blur(50px)");
        $('#red').css("filter", "blur(50px)");
        $('#orange').css("filter", "blur(50px)");
        $('#yellow').css("filter", "blur(50px)");
        $('#green').css("filter", "blur(50px)");
        header.innerHTML = "Blue";
        copy.innerHTML = "Seen as a communicator of sadness, calmness, reliability or strength, this is a colour that can express many emotions. Choose blue and its respective shades to illustrate your unique dream.";
    } else if (x === document.getElementById("purple")) {
        $('#red').css("filter", "blur(50px)");
        $('#blue').css("filter", "blur(50px)");
        $('#orange').css("filter", "blur(50px)");
        $('#yellow').css("filter", "blur(50px)");
        $('#green').css("filter", "blur(50px)");
        header.innerHTML = "Purple";
        copy.innerHTML = "Connected to ideas of royalty, wealth, luxury, or romance, this colour is a mix of red and blue that exudes creativity and imagination. Choose purple to convey your graceful and whimsical dreams.";
    }
}

function choiceOut(x) {
    var header = document.getElementById("colourHead");
    var copy = document.getElementById("colourCopy");
    x.style.width = "120px";
    x.style.height = "120px";
    $('#purple').css("filter", "blur(15px)");
    $('#red').css("filter", "blur(15px)");
    $('#blue').css("filter", "blur(15px)");
    $('#orange').css("filter", "blur(15px)");
    $('#yellow').css("filter", "blur(15px)");
    $('#green').css("filter", "blur(15px)");
    header.innerHTML = "What is your most <br/> memorable dream?";
    copy.style.width = "auto";
    copy.innerHTML = "Please select a colour to share your dream.";
}