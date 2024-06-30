async function fetchBTCPrice() {
    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const data = await response.json();
        const currentPrice = parseFloat(data.price);

        document.getElementById('btcPrice').innerText = currentPrice.toFixed(2);

        // Simple prediction logic
        const prediction = predictPrice(currentPrice);
        document.getElementById('prediction').innerText = prediction;
    } catch (error) {
        console.error('Error fetching BTC price:', error);
        document.getElementById('btcPrice').innerText = 'Error fetching price';
        document.getElementById('prediction').innerText = 'Error fetching price';
    }
}

function predictPrice(currentPrice) {
    // Simple logic for demonstration purposes: If the price is above 30,000, predict "high"; otherwise, "low"
    if (currentPrice > 30000) {
        return 'high';
    } else {
        return 'low';
    }
}

// Fetch the price when the page loads
fetchBTCPrice();

// Optionally, refresh the price every two minutes (120000 milliseconds)
setInterval(fetchBTCPrice, 120000);
