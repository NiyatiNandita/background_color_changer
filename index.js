var newColor = document.getElementById("bodyyy");
for (var i = 0; i < document.querySelectorAll(".color").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    this;
    console.log(i);
    var newc = this.innerText;
    colorChange(newc);
    buttonAnimation(newc);
  });
}
function colorChange(newc) {
  switch (newc) {
    case "Pink":
      newColor.style.backgroundColor = "pink";
      break;
    case "Yellow":
      newColor.style.backgroundColor = "yellow";

      break;
    case "Blue":
      newColor.style.backgroundColor = "blue";
      break;
    case "Red":
      newColor.style.backgroundColor = "red";

      break;
    case "Lightblue":
      newColor.style.backgroundColor = "lightblue";

      break;
    case "Coral":
      newColor.style.backgroundColor = "coral";

      break;
    case "Cyan":
      newColor.style.backgroundColor = "cyan";

      break;
    case "Purple":
      newColor.style.backgroundColor = "purple";

      break;
    case "Lightgreen":
      newColor.style.backgroundColor = "lightgreen";

      break;

    default:
      console.log(newc);
  }
}
function buttonAnimation(newc) {
  newc = newc.toLowerCase();
  var activeButton = document.querySelector("." + newc);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000);
}
