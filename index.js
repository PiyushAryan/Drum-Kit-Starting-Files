
/// Keyboard Pressing ///

document.addEventListener("keydown" , Event);

    function Event(event){
        makeSound(event.key)
    }

////////////////////////////

    function makeSound(key){
        switch (key) {
            case "w":
                var tom1= new Audio("sounds/Chirayu.mp3");
                tom1.play();
            break;
    
            case "a":
                var tom2= new Audio("sounds/chutiya.m4a");
                tom2.play();
            break;
    
            case "s":
                var tom3= new Audio("sounds/hai.mp3");
                tom3.play();
            break;
    
            case "d":
                var tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
    
            case "j":
                var snare= new Audio("sounds/snare.mp3");
                snare.play();
            break;
    
            case "k":
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
    
            case "l":
                var crash= new Audio("sounds/crash.mp3");
                crash.play();
            break;
            
        
            default:
                var crash= new Audio("sounds/speech.mp3");
                crash.play();
        }

    }




            //// By Clicking the button ////

    // var buttoninnerHTML = this.innerHTML;

    // makeSound(buttoninnerHTML)



    // var i = 0;
// while (i <= 6) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", playing);

//     function playing(){

// }
//     i++;
// }