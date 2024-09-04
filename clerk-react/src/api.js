export const fetchBotResponse = async (userInput) => {
    // Replace with your API endpoint
    const response = await fetch('https://your-ai-api.com/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userInput })
    });
    const data = await response.json();
    return data.reply;
};
