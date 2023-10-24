// Initially, hide the BMI Information box.
document.getElementById("bmiInfo").style.display = "block";

document.getElementById("calculate").addEventListener("click", function () {
    const age = parseFloat(document.getElementById("age").value);
    const heightFeet = parseFloat(document.getElementById("heightFeet").value);
    const heightInches = parseFloat(document.getElementById("heightInches").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (isNaN(age) || isNaN(heightFeet) || isNaN(heightInches) || isNaN(weight) || age <= 0 || heightFeet <= 0 || heightInches < 0 || weight <= 0) {
        result.innerHTML = "Please enter valid age, height, and weight.";
        document.getElementById("bmiValue").innerHTML = "";
        document.getElementById("indicatorValue").innerHTML = "Invalid";
    } else {
        const heightMeters = ((heightFeet * 12) + heightInches) * 0.0254; // Convert to meters
        const bmi = weight / (heightMeters * heightMeters);
        result.innerHTML = `Your BMI is: <span id="bmiValue">${bmi.toFixed(2)}</span>`;
        displayBMIRange(bmi);
    }
});

function displayBMIRange(bmi) {
    const indicator = document.getElementById("indicatorValue");
    if (bmi < 18.5) {
        indicator.innerHTML = "Underweight";
    } else if (bmi < 24.9) {
        indicator.innerHTML = "Normal";
    } else if (bmi < 29.9) {
        indicator.innerHTML = "Overweight";
    } else {
        indicator.innerHTML = "Obesity";
    }
}
