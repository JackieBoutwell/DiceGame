var randomNumber1 = Math.floor(Math.random() * 6) + 1 //get random number 1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png" //randomimg 1-6

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png" //photos 1-6

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " YOU WIN PLAYER 1";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " YOU WIN PLAYER 2";
} else {
    document.querySelector("h1").innerHTML = "TIE";
}