// Login Button

function login(element){
if(element.innerText == "Login"){
element.innerText = "Logout";
}
else{
    element.innerText = "Login";
}
}

// Like Button
function showAlert(element){
alert("Ninja was liked");
}

// Add Definition Button
function removeButton(element){
element.remove();

}