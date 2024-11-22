const facts = [
    "The Mona Lisa has no visible eyelashes or eyebrows.",
    "Van Gogh only sold one painting during his lifetime.",
    "The most expensive painting ever sold was $450.3 million.",
    "Art helps reduce stress and improve mental health."
];

let currentFact = 0;
const factElement = document.getElementById("fact");

function updateFact() {
    factElement.textContent = facts[currentFact];
    currentFact = (currentFact + 1) % facts.length;
}

setInterval(updateFact, 5000); // Update every 5 seconds
updateFact(); // Initial call
