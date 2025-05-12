const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route for handling task processing
app.post('/process', (req, res) => {
    const userInput = req.body.input; // Get user input from the request body
    const result = processInput(userInput);
    res.json({ result: result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Function to process the user's input
function processInput(input) {
    const lowerInput = input.toLowerCase();

    // Detects if the input contains action-related keywords (create, generate, make, etc.)
    if (lowerInput.includes("create") || lowerInput.includes("generate") || lowerInput.includes("make")) {
        if (lowerInput.includes("video")) {
            return "Processing video task..."; // Placeholder for video task
        } else if (lowerInput.includes("image") || lowerInput.includes("logo")) {
            return "Processing image task..."; // Placeholder for image task
        } else if (lowerInput.includes("text") || lowerInput.includes("essay") || lowerInput.includes("article")) {
            return "Processing text task..."; // Placeholder for text task
        } else {
            return "Processing general task..."; // Placeholder for more generic tasks
        }
    } else {
        return "I'm working on it! Trying to figure it out...";
    }
}
