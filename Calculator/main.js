let output = "";

let display = document.querySelector(".display");
let buttons = document.getElementsByTagName("button");

let buttonArray = Array.from(buttons);

// arr.forEach(btns => {
//     btns.addEventListener("click", function() {
//         console.log(this.innerHTML);
//     })
// });

// arr.forEach(btns => {
//     btns.addEventListener("click", () => {
//         console.log(btns.innerHTML);
//     })
// });

buttonArray.forEach(btns => {
    btns.addEventListener("click", (event) => {
        console.log(event);
        let activeBTN = event.target.textContent;
        if(activeBTN === "=") {
            display.value = eval(output);
            output = display.value;
        }
        else if(activeBTN === "AC") {
            output = "";
            display.value = output;
        }
        else if(activeBTN === "DEL") {
            // output = output.slice(0,-1);
            output  = output.substring(0,output.length-1);
            display.value = output;
        }
        else {
            output += activeBTN;
            display.value = output;
        }
    })
});
