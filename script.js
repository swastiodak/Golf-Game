canvas = new fabric.Canvas('myCanvas')
ball_x = 0;
ball_y = 0;
ballWidth = 50;
ballHeight = 50;
hole_y = 400;
hole_x = 800;
holeWidth = 50;
holeHeight = 50;
background_image = "Grass.jpg";
ball_image = "ball.png";
hole_image = "golf-h.png";

function add() {
    background_image = new Image;
    background_img.onload = uploadBackground;
    background_img.src = background_image;

    ball_image = new Image();
    ball_image.onload = new_image;
    ball_image.src = ball_image;

    hole_image = new Image();
    hole_image.onload = uploadHole;
    hole_image.src = hole_image;
}

function uploadBackground() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function new_image() {
    ctx.drawImage(ball_image, ball_x, ball_y, ballWidth, ballHeight);
}

function uploadHole() {
    ctx.drawImage(ball_image, ball_x, ball_y, ballWidth, ballHeight);
}
function load_img() {
    fabric.Image.fromURL("golf-h.png", function (Img) {
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_obj);
    })
    new_image();
}

// if ((ball_x==hole_x) && (ball_y==hole_y)) {

//     canvas.remove(ball_obj);
//     document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
//     document.getElementById("myCanvas").style.borderColor="red";
// }

function new_image() {
    fabric.Image.fromURL("ball.png", function (img) {
        ball = img;
        ball.scaleToWidth(50);
        ball.scaleToHeight(50);
        ball.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball);
    });
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);


    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    function up() {
        if (ball_y >= 0) {
            ball_y -= ballHeight;
            console.log("ball height = " + ballHeight);
            console.log("moving up " + ball_x + " " + ball_y);
            canvas.remove(ball);
            new_image();
        }
    }
}
function down() {
    if (ball_y <= 500) {
        ball_y += ballHeight;
        console.log("ball height = " + ballHeight);
        console.log("moving down " + ball_x + " " + ball_y);
        canvas.remove(ball);
        new_image();
    }
}

function left() {
    if (ball_x >= 0) {
        ball_x -= ballWidth;
        console.log("ball width = " + ballWidth);
        console.log("moving left " + ball_x + " " + ball_y);
        canvas.remove(ball);
        new_image();
    }
}

function right() {
    if (ball_x <= 850) {
        ball_x += ballWidth;
        console.log("ball width = " + ballWidth);
        console.log("moving right " + ball_x + " " + ball_y);
        canvas.remove(ball);
        new_image();
    }
}

