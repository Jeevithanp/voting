// JavaScript to handle voting, live result updates, and winning probability

// Sample vote data
let votes = {
    'Python': 0,
    'Java': 0,
    'R': 0
};

// Function to handle voting and update the vote count
function vote(option) {
    votes[option] += 1;
    updateResults();
    updateWinningProbability();
}

// Function to update the results section
function updateResults() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear existing content

    for (const option in votes) {
        const voteCount = votes[option];
        const resultText = `<p>${option}: ${voteCount} votes</p>`;
        resultDiv.innerHTML += resultText;
    }
}

// Function to update the winning probability section
function updateWinningProbability() {
    const probabilityDiv = document.getElementById('probability');
    probabilityDiv.innerHTML = ''; // Clear existing content

    // Calculate total votes
    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

    // Display probabilities if there are votes
    if (totalVotes > 0) {
        for (const option in votes) {
            const probability = ((votes[option] / totalVotes) * 100).toFixed(2);
            const probabilityText = `<p>${option}: ${probability}% probability of winning</p>`;
            probabilityDiv.innerHTML += probabilityText;
        }
    } else {
        probabilityDiv.innerHTML = '<p>No votes yet. Vote to see the probabilities.</p>';
    }
}

// Initial call to set up the dashboard
updateResults();
updateWinningProbability();

// Periodically update the results and probabilities every 2 seconds (for real-time effect)
setInterval(() => {
    updateResults();
    updateWinningProbability();
}, 2000);
