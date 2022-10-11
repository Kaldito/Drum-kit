let buttons = document.querySelectorAll(".drum");
let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let kick = new Audio("./sounds/kick-bass.mp3");
let snare = new Audio("./sounds/snare.mp3");
let crash = new Audio("./sounds/crash.mp3");

function makeSound(key) {
    buttonAnimation(key);

    switch (key) {
        case "w":
            tom1.play();
            break;

        case "a":
            tom2.play();
            break;

        case "s":
            tom3.play();
            break;

        case "d":
            tom4.play();
            break;

        case "j":
            crash.play();
            break;

        case "k":
            snare.play();
            break;

        case "l":
            kick.play();
            break;
                
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key) {
    let key_tag = document.querySelector("." + key);
    key_tag.classList.add("pressed");

    setTimeout(function() {
        key_tag.classList.remove("pressed");
    }, 150)
}

document.addEventListener("keydown", function(event) {
    let keyPressed = event.key;
    makeSound(keyPressed.toLowerCase());
})

buttons.forEach(button => {
    button.addEventListener("click", function() {
        makeSound(this.innerHTML);
    })
});


