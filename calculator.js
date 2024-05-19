// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Function to update the display
function updateDisplay(value) {
    if (value === '%') {
        // Convert the percentage to its decimal representation and update the display
        display.value = parseFloat(display.value) / 100;
    } else {
        // For other values, simply append them to the display
        display.value += value;
    }
}

// Function to calculate the result
function calculate() {
    // Evaluate the expression in the display and update the display with the result
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Sin
function sin(){
    display.value = Math.sin(display.value * Math.PI / 180);
}

//cos
function cos(){
    display.value = Math.cos(display.value * Math.PI / 180);
}

//tan
function tan(){
    display.value = Math.tan(display.value * Math.PI / 180);
}

//log
function log(){
    display.value = Math.log10(display.value );
}

//in
function asin(){
    display.value = Math.log(display.value);
}

//factorial
function fact(){ 
    var number, fact;
    fact = 1;
    number = display.value;
    for(let i=1;i<=number;i++){
        fact = fact*i;
    }
    display.value = fact;
}

// Function to raise a number to a power
function pow() {
    const baseNumber = parseFloat(display.value); // Get the base number from the display
    display.value = ''; // Clear the display for the power input
    const powerButton = document.getElementById('equal'); // Assuming the equal button has an id of 'equal'
    powerButton.onclick = function() { // Add onclick event to equal button
        const powerNumber = parseFloat(display.value); // Get the power number from the display
        if (!isNaN(powerNumber)) {
            display.value = Math.pow(baseNumber, powerNumber);
        } else {
            display.value = 'Invalid input';
        }
    };
}

//square rute
function sqrt(){
    display.value = Math.sqrt(display.value,2);
}

//pi
function pi(){
    display.value = 3.1415926535897;
}

//e
function e(){
    display.value = 2.7182818284590;
}