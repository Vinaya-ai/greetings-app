function getGreeting() {
    const today = new Date();
    const hour = today.getHours();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    let greetingMessage = '';

    // Check the time of day for greeting
    if (hour < 12) {
        greetingMessage += 'Good Morning! ';
    } else if (hour < 18) {
        greetingMessage += 'Good Afternoon! ';
    } else {
        greetingMessage += 'Good Evening! ';
    }

    // Check for special dates and add holiday greetings
    if (month === 0 && day === 26) { // 26th January: Independence Day (India)
        greetingMessage += 'Happy Independence Day!';
    } else if (month === 11 && day === 25) { // 25th December: Christmas
        greetingMessage += 'Merry Christmas!';
    } else if (month === 9 && day === 2) { // 2nd October: Gandhi Jayanti
        greetingMessage += 'Happy Gandhi Jayanti!';
    } else if (month === 0 && day === 1) { // 1st January: New Year
        greetingMessage += 'Happy New Year!';
    }

    // Add a default message for other days
    if (greetingMessage === 'Good Morning! ' || greetingMessage === 'Good Afternoon! ' || greetingMessage === 'Good Evening! ') {
        greetingMessage += 'Have a great day!';
    }

    // Set the greeting message to the HTML element
    document.getElementById('greeting').innerText = greetingMessage;
}

// Call the function to display the greeting when the page loads
getGreeting();
