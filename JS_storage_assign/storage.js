 // This function increases the count
 function clickButtonFunction() {
    console.log('run');
//Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
if (localStorage.getItem("clickCounter") === null) {
  // Store
  localStorage.setItem("clickCounter", "0");
}
// Get the value from local storage
var value = parseInt(localStorage.getItem("clickCounter"));
// Incrememtnt the count by 1
var newValue = value + 1
//Write the value back to local storage
localStorage.setItem("clickCounter", newValue);

// Write the value to the div
document.getElementById("clickCounter").innerHTML = newValue

// for session storage
if (sessionStorage.getItem("clickCounter") === null) {
  sessionStorage.setItem("clickCounter", "0");
}
var value = parseInt(sessionStorage.getItem("clickCounter"));
var newValue = value + 1
sessionStorage.setItem("clickCounter", newValue);

}

// Reset local storage to 0
function clickReset() {

localStorage.setItem("clickCounter", "0");
// Write the value to the div
document.getElementById("clickCounter").innerHTML = '0'
sessionStorage.setItem("clickCounter", "0");

}