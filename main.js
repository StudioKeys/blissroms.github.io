function toggleMenu() {
  // get the clock
  var myMenu = document.getElementById("mobilemenu");

  // get the current value of the clock's display property
  var displaySetting = myMenu.style.display;

  // also get the clock button, so we can change what it says
  var MenuButton = document.getElementById("hamicon");

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == "block") {
    console.log("2");
    // clock is visible. hide it
    myMenu.style.display = "none";
  } else {
    console.log("3");
    // clock is hidden. show it
    myMenu.style.display = "block";
  }
}
console.log("1");
// onclick = "toggleMenu()";
