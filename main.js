document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var seeSwey = new Date('2024.01.01 01:00:00').getTime() / 1000

    // Set up FlipDown
    var flipdown = new FlipDown(seeSwey)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
        console.log('The countdown has ended!');
    });

});
