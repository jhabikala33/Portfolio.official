// ==================================
// PART 1: TIME-BASED GREETING
// ==================================

let visitorName = prompt("What is your name?");

let currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good morning";
}
else if (currentHour < 18) {
    greeting = "Good afternoon";
}
else {
    greeting = "Good evening";
}

console.log(greeting + ", " + visitorName + "!");

document.getElementById("liveGreeting").innerText =
    greeting + ", " + visitorName + "!";


// ==================================
// PART 2: AGE VERIFICATION
// ==================================

let birthYear = Number(prompt("What is your birth year?"));

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

let daysLived = age * 365;

if (Number.isInteger(birthYear) &&
    birthYear >= 1900 &&
    birthYear <= currentYear) {

    console.log(
        "You have lived for approximately " +
        daysLived + " days!"
    );

    if (age >= 18) {
        console.log("You are an adult.");
    }
    else {
        console.log("You are a minor.");
    }

} else {
    console.log("Please enter a valid birth year.");
}


// ==================================
// PART 3: CONTACT FORM
// ==================================

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Replace with the complete email address
    let myEmail = "YOUR_FULL_EMAIL_ADDRESS_HERE";

    let subject = encodeURIComponent(
        "Portfolio message from " + name
    );

    let body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    if (myEmail === "YOUR_FULL_EMAIL_ADDRESS_HERE") {
        document.getElementById("formStatus").innerText =
            "Please configure the portfolio email in script.js.";
        return;
    }

    window.location.href =
        "mailto:" + myEmail +
        "?subject=" + subject +
        "&body=" + body;

    document.getElementById("formStatus").innerText =
        "Your email application is opening!";
});
