// Function to generate greeting message
function generateGreeting() {
    const userName = document.getElementById('userName').value;
    const greeting = getGreetingMessage(userName);
    document.getElementById('greeting').innerText = greeting;
}

// Function to handle form submission when the Submit button is clicked or Enter key is pressed
function submitName(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const name = document.getElementById('userName').value; // Get the input value
    if (name) {
        alert(`Hello, ${name}! Welcome to the app!`); // Greet the user
        // You can update the greeting message here if needed
    } else {
        alert("Please enter your name.");
    }
}

// Add an event listener to the input to listen for the Enter key
document.getElementById('userName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generateGreeting(); // Call the greeting function when Enter is pressed
    }
});

// Function to generate a time-based greeting and holiday message
function getGreetingMessage(userName) {
    const today = new Date();
    const hour = today.getHours();
    const day = today.getDate();
    const month = today.getMonth();

    let greetingMessage = '';

    // Time-based greeting
    if (hour < 12) {
        greetingMessage += 'Good Morning';
    } else if (hour < 18) {
        greetingMessage += 'Good Afternoon';
    } else {
        greetingMessage += 'Good Evening';
    }

    // Add user's name if provided
    if (userName) {
        greetingMessage += `, ${userName}`;
    }

    greetingMessage += '! ';

    // Add special holiday messages
    if (month === 0 && day === 26) { // 26th January: Republic Day
        greetingMessage += 'Happy Republic Day!';
    } else if (month === 11 && day === 25) { // 25th December: Christmas
        greetingMessage += 'Merry Christmas!';
    } else if (month === 9 && day === 2) { // 2nd October: Gandhi Jayanti
        greetingMessage += 'Happy Gandhi Jayanti!';
    } else if (month === 0 && day === 1) { // 1st January: New Year
        greetingMessage += 'Happy New Year!';
    } else {
        greetingMessage += 'Have a great day!';
    }

    return greetingMessage;
}
