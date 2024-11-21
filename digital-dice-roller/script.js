// script.js
document.querySelector('.roll-button').addEventListener('click', () => {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const resultText = document.querySelector('.result-text');

    // Add rolling animation
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');

    // Simulate rolling effect
    setTimeout(() => {
        // Remove rolling animation
        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');

        // Generate random dice rolls
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        // Update dice faces based on rolls
        dice1.textContent = getDiceFace(roll1);
        dice2.textContent = getDiceFace(roll2);

        // Display result
        resultText.textContent = `You rolled: ${roll1} and ${roll2}`;
    }, 1000); // Rolling lasts for 1 second
});

// Function to map roll number to dice emoji
function getDiceFace(number) {
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return diceFaces[number - 1];
}
