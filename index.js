for (var i = 0;i<=6;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",playSound);
}
function playSound()
{
    var keyPressed = this.innerHTML;
    playtone(keyPressed);
    bootAnimation(keyPressed);
}

document.addEventListener("keypress",eventNew)

function eventNew(event)
{
  playtone(event.key);
  bootAnimation(event.key);
}

function playtone(key)
{
  switch (key) {
    case "w":
    var w = new Audio("sounds/tom-1.mp3");
    w.play();
    break;

    case "a":
    var a = new Audio("sounds/tom-2.mp3");
    a.play();
    break;

    case "s":
    var s = new Audio("sounds/tom-3.mp3");
    s.play();
    break;

    case "d":
    var d = new Audio("sounds/tom-4.mp3");
    d.play();
    break;

    case "j":
    var j = new Audio("sounds/snare.mp3");
    j.play();
    break;

    case "k":
    var k = new Audio("sounds/crash.mp3");
    k.play();
    break;

    case "l":
    var l = new Audio("sounds/kick-bass.mp3");
    l.play();
    break;

    default:
    console.log(this.innerHTML);
}
}

function bootAnimation(anime)
{
  var activeButton = document.querySelector("." + anime);
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed")},100)
}
