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
    if (month === 0 && day === 26) { // 26th January: Independence Day
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

function generateGreeting() {
    const userName = document.getElementById('userName').value;
    const greeting = getGreetingMessage(userName);
    document.getElementById('greeting').innerText = greeting;
}
