
var size = document.querySelectorAll(".drum").length;
for(var i=0;i<size;i++) {
    var buttons = document.querySelectorAll(".drum")[i];
    buttons.addEventListener("click", function() {

        var letter = this.innerHTML;
        makeSound(letter);
        animation(letter);
    }); 
}

document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);
    animation(event.key);
}); 

function makeSound(input) {
    switch (input) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case 'a':
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                case 's':
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                    case 'd':
                        var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
                        case 'j':
                            var audio = new Audio("sounds/snare.mp3");
                            audio.play();
                            break;
                            case 'k':
                                var audio = new Audio("sounds/crash.mp3");
                                audio.play();
                                break;
                                case 'l':
                                    var audio = new Audio("sounds/kick-bass.mp3");
                                    audio.play();
                                    break;
        default:
            console.log("Wrong Key Pressed");
            break;
    }
}

function animation(input) {
    var activeButton = document.querySelector("."+input);
    console.log(activeButton.classList);
    activeButton.classList.add("pressed");
    console.log(activeButton.className);

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}