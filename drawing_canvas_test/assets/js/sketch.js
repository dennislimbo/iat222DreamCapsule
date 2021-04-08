window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    // const clearButton = document.querySelector("#clear");
    const blackButton = document.querySelector("#black");
    const whiteButton = document.querySelector("#white");

    //stroke width
    const fiveButton = document.querySelector("#sizeFive");
    const fifteenButton = document.querySelector("#sizeFifteen");
    const thirtyButton = document.querySelector("#sizeThirty");
    var strokeWidth = 5;
    var lastWidth = 5;

    //stroke colour
    const colour0 = document.querySelector("#c0");
    const colour1 = document.querySelector("#c1");
    const colour2 = document.querySelector("#c2");
    const colour3 = document.querySelector("#c3");
    const colour4 = document.querySelector("#c4");
    const colour5 = document.querySelector("#c5");
    var lastColour = window.getComputedStyle(colour0).backgroundColor;

    //back and next buttons
    const prev = document.getElementById("previous");
    const next = document.getElementById("next");
    var state = 0;
    
    //back and next buttons behaviour
    prev.addEventListener('click', () => {
        if (state === 0) {
            window.location.href = 'choice.html';
        } else if (state === 1) {
            const controls = document.getElementById("controls");
            controls.style.visibility = "visible";
            const form = document.getElementById("my-form");
            form.style.visibility = "hidden";
            // alert(form.visibility);
            canvas.style.borderRadius = "8px 0px 0px 8px";
            state = 0;
            prev.innerHTML = "Back";
            next.innerHTML = "Next";
        }
    });


    next.addEventListener('click', () => {
        // alert(state);
        if (state === 0) {
            // alert("hello");
            const controls = document.getElementById("controls");
            controls.style.visibility = "hidden";
            const form = document.getElementById("my-form");
            form.style.visibility = "visible";
            // alert("hello");
            canvas.style.borderRadius = "8px";
            state = 1;
            //replace word with "cancel"?
            prev.innerHTML = "Return";
            next.innerHTML = "Submit";
        } else if (state === 1) {
            
        }
    });

    //setting up the canvas
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = "assets/images/background2.jpg";

    img.onload = () => {
        const [img_scaled_width, img_scaled_height] = drawImageToScale(img, ctx);
        canvas.width = img_scaled_width;
        canvas.height = img_scaled_height;
        window.addEventListener('resize', drawImageToScale(img,ctx));
    }

    //eventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting || state === 1) return;
        var xOff = document.getElementById("canvas");
        var yOff = document.getElementById("drawingComp");
        var xOffset =  xOff.offsetLeft;
        var yOffset =  window.innerHeight / 100 * 15;
        // console.log("" + yOffset);
        // console.log("" + strokeWidth);
        if (ctx.strokeStyle !== "#ffffff") {
            ctx.strokeStyle = lastColour;
        }
        ctx.lineWidth = strokeWidth;
        ctx.lineCap = 'round';
        // ctx.lineTo(e.clientX, e.clientY);
        ctx.lineTo(e.clientX - xOffset, e.clientY - yOffset);
        ctx.stroke();
        ctx.beginPath();
        // ctx.moveTo(e.clientX, e.clientY);
        ctx.moveTo(e.clientX - xOffset, e.clientY - yOffset);
    }

    // clearButton.addEventListener('click', () => clearCanvas(img, ctx, canvas.with, canvas.height));
    //editing the stroke style
    blackButton.addEventListener('click', () => {
        ctx.strokeStyle = lastColour;
        strokeWidth = lastWidth;
    });
    whiteButton.addEventListener('click', () => {
        ctx.strokeStyle = "#ffffff";
        strokeWidth = 45;
    });
    fiveButton.addEventListener('click', () => {
        strokeWidth = 5;
        lastWidth = strokeWidth;
    });
    fifteenButton.addEventListener('click', () => {
        strokeWidth = 15;
        lastWidth = strokeWidth;
    });
    thirtyButton.addEventListener('click', () => {
        strokeWidth = 30; 
        lastWidth = strokeWidth;
    });

    //editing stroke colour
    colour0.addEventListener('click', () => {
        ctx.strokeStyle = window.getComputedStyle(colour0).backgroundColor;
        lastColour = ctx.strokeStyle;
        strokeWidth = lastWidth;
    });
    colour1.addEventListener('click', () => {
        ctx.strokeStyle = window.getComputedStyle(colour1).backgroundColor;
        lastColour = ctx.strokeStyle;
        strokeWidth = lastWidth;
    });
    colour2.addEventListener('click', () => {
        ctx.strokeStyle = window.getComputedStyle(colour2).backgroundColor;
        lastColour = ctx.strokeStyle;
        strokeWidth = lastWidth;
    });
    colour3.addEventListener('click', () => {
        ctx.strokeStyle = window.getComputedStyle(colour3).backgroundColor;
        lastColour = ctx.strokeStyle;
        strokeWidth = lastWidth;
    });
    colour4.addEventListener('click', () => {
        ctx.strokeStyle = window.getComputedStyle(colour4).backgroundColor;
        lastColour = ctx.strokeStyle;
        strokeWidth = lastWidth;
    });
    colour5.addEventListener('click', () => {
        ctx.strokeStyle = window.getComputedStyle(colour5).backgroundColor;
        lastColour = ctx.strokeStyle;
        strokeWidth = lastWidth;
    });
    

    //saving an image
    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', () => save(canvas));

});

function drawImageToScale(img, ctx) {
    const img_width = 1150;
    const scaleFactor = img_width / img.width;
    const img_height = img.height * scaleFactor;
    ctx.drawImage(img, 0, 0, img_width, img_height);
    return [img_width, img_height];
}

function clearCanvas(img, ctx, img_scaled_width, img_scaled_height) {
    ctx.clearRect(0, 0, img_scaled_width, img_scaled_height);
    drawImageToScale(img, ctx);
}

//saving the canvas
function save(canvas) {
    const data = canvas.toDataURL('image/png');
    const anchor = document.createElement('a');
    anchor.href = data;
    anchor.download = 'image.png';
    anchor.click();
}



// nav bar
function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline") {
    x.style.display = "none";
    } else {
    x.style.display = "inline";
    }
}