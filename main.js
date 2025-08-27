document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var newCountDown = new Date('2025.10.30 07:00:00').getTime() / 1000

    // Set up FlipDown
    var flipdown = new FlipDown(newCountDown)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
        console.log('The countdown has ended!');
    });

});
