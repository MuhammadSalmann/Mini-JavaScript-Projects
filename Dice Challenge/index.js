// Check if the page is refreshed or not
var navigationEntries = performance.getEntriesByType("navigation");

if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
    // Function to calculate a random number between 1 and 6
    function Random_Number() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Function to change the image source for Player 1
    function P1DiceChange(diceNumber, source) {
        console.log(source.attributes);
        console.log(source.getAttribute("src"));
        source.setAttribute("src", `images/dice${diceNumber}.png`);
    }

    // Function to change the image source for Player 2
    function DiceSrcChanger(diceNumber, source) {
        source.src = `images/dice${diceNumber}.png`;
    }

    var dice1Number = Random_Number();
    var dice2Number = Random_Number();
    var p1_dice = document.querySelector(".img1");
    var p2_dice = document.querySelector(".img2");

    P1DiceChange(dice1Number, p1_dice);
    DiceSrcChanger(dice2Number, p2_dice);

    var Msg1 = "Player 1 Wins!";
    var Msg2 = "Player 2 Wins!";
    var Msg3 = "DRAW!!!";
    var mainHeading = document.querySelector("h1");

    if (dice1Number > dice2Number) {
        mainHeading.textContent = Msg1;
    } else if (dice1Number < dice2Number) {
        mainHeading.textContent = Msg2;
    } else {
        mainHeading.textContent = Msg3;
    }
}
