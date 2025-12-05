
function welcomeMessage() { 
    let name = prompt("Welcome to my website! Please enter your name:");
    document.getElementById("Welcome-speech").innerHTML = `Hello, ${name}! Welcome to Our Website.`;

    if (name === null || name.trim() === "") {
        name = "Guest";
    }
}

welcomeMessage();