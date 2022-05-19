let button = document.getElementsByTagName("button");
let inputScreen = document.getElementsByClassName("inputScreen")[0];
let calculate = document.querySelector("#calculate");
let clear = document.querySelector("#clear");

for (var i = 0; i < 19; i++) {
    if (i != 0 && i != 18) {
        button[i].addEventListener("click", print);
    }
}

function print() {
    inputScreen.value = inputScreen.value + this.value;
}

function empty() {
    inputScreen.value = "";
};

clear.addEventListener("click", empty);

function calculus() {
    inputScreen.value = eval(inputScreen.value);
}

calculate.addEventListener("click", calculus);


