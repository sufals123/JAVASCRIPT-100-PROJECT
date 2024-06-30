const Percentage = document.getElementById('Percentage');
const Amount = document.getElementById("Ammount");
const Result = document.getElementById("Result");



// Define getResult function
const getResult = () => {
    const percentage = parseFloat(Percentage.value);
    const amount = parseFloat(Amount.value);

    // Check if the percentage and amount NaN
    if (isNaN(percentage) || isNaN(amount)) {
        Result.value = 0;
        return;
    }
    const rs = (amount * percentage) / 100;
    Result.value = rs;
    
}
// Add event listeners after defining getResult
Percentage.addEventListener("keyup", getResult);
Amount.addEventListener("keyup", getResult);




