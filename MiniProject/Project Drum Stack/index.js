var noOfDrumStrict = document.querySelectorAll(".drum");

// Function to play audio and add pressed class
function playAudioAndAddPressedClass(element) {
  element.classList.add("pressed");

  setTimeout(function () {
    element.classList.remove("pressed");
  }, 100);

  var key = element.getAttribute("data-key");

  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}

// Event listeners for button clicks
for (var i = 0; i < noOfDrumStrict.length; i++) {
  noOfDrumStrict[i].addEventListener("click", function () {
    playAudioAndAddPressedClass(this);
  });
}

// Event listener for keyboard keydown event
document.addEventListener("keydown", function (event) {
  // Find corresponding button
  var keyPressed = event.key.toLowerCase();
  var correspondingButton = document.querySelector(".drum[data-key='" + keyPressed + "']");

  // If corresponding button is found, play audio and add pressed class
  if (correspondingButton) {
    playAudioAndAddPressedClass(correspondingButton);
  }
});
