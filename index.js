// Image 1
let randomNumber1 = Math.floor((Math.random()*6)+1);
let randomDiceImage1 = "dice"+randomNumber1+".png";
let randomImageSource1 = "images/"+randomDiceImage1;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
// Image 2
let randomNumber2 = Math.floor((Math.random()*6)+1);
let randomDiceImage2 = "dice"+randomNumber2+".png";
let randomImageSource2 = "images/"+randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Heading
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won 🎉";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won 🎊";
} else {
    document.querySelector("h1").innerHTML = "It's a draw, try again!";
}