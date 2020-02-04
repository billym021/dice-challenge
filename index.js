/*Generating random # between 0 and 0.9999 for Math.random(). Then
we multiply that number by 6 to change it between 0 and 5.9999. Then we round that number down (with floor method)
to nearest whole number so it becomes between 0 and 5. Then add 1 to change range between 1 and 6. Copy and paste
in console to test before implementing code. If you want 2 lines can do this: randomNumber1 = Math.floor(randomNumber1); */

// Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); // Can do querySelector(".img1"). This works too.
//This selects all the img elements and for the first img [0], we change it's source by using setAttribute method to display randomDiceImage.

// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // Can do querySelector(".img2"). This works too and you can store this in a variable.



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "✌️ Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🙌 Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "👏 Draw!";
}



/**** Alternative way to display code for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
*/
