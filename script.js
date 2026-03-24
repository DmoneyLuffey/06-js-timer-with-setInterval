// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');

// Initialize the timer value
let timerValue = 20;

// Track if confetti has been triggered to avoid multiple triggers
let confettiTriggered = false;

// Track if we are in the active countdown
let countdownActive = false;

// Function to start the countdown
function startCountdown() {
    // Reset values for a new countdown
    timerValue = 20;
    confettiTriggered = false;
    countdownActive = true;
    
    const countdownInterval = setInterval(function() {
        // Decrement the timer value
        timerValue--;
        // Update the timer display
        timerDisplay.textContent = timerValue;

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '0'; // Ensure the display shows 0
            countdownActive = false;
        }
    }, 1000);
}

// Initialize the counter value
let counterValue = 0;

// Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Function to increase the counter
function increaseCounter() {
    // Increment the counter value
    counterValue++;
    // Update the counter display
    counterDisplay.textContent = counterValue;
    
    // Check if counter reached 10 or greater within 10 seconds
    // timerValue >= 10 means less than 10 seconds have passed
    if (counterValue >= 10 && timerValue >= 10 && countdownActive && !confettiTriggered) {
        confettiTriggered = true;
        triggerConfetti();
    }
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
