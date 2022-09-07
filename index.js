function addingEventListener() {
    const input = document.getElementById("button");
    input.addEventListener('click', clickAlert);

}

//callback function to handle the click event
function clickAlert() {
    alert("I was called!");
}

//call the addEventListener() function to activate the event listener
addingEventListener();