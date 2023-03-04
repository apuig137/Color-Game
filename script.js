let cant = 6;
let colors = generateRandomColors(cant);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let easy = document.querySelector("#easyButton");
let hard = document.querySelector("#hardButton");

colorDisplay.textContent = pickedColor;

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

for(let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.background;
        if (clickedColor == pickedColor) {
            message.textContent = "Correcto!";
            reset.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.color = clickedColor;
        } else {
            this.style.background = "darkgreen";
            message.textContent = "Intentalo Nuevamente";
        }
    })
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r +", " + g + ", " + b +")";
}

function generateRandomColors(num){
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

reset.addEventListener("click", function(){
    colors = generateRandomColors(cant);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Color";
    message.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
})

easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    cant = 3;
    colors = generateRandomColors(cant);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    cant = 6;
    colors = generateRandomColors(cant);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});
