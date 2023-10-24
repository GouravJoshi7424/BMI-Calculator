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

document.getElementById("calculate").addEventListener("click", function () {
    const age = parseFloat(document.getElementById("age").value);
    const heightFeet = parseFloat(document.getElementById("heightFeet").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (isNaN(age) || isNaN(heightFeet) || isNaN(weight) || age <= 0 || heightFeet <= 0 || weight <= 0) {
        result.innerHTML = "Please enter valid age, height, and weight.";
        document.getElementById("bmiInfo").style.display = "none";
    } else {
        const heightMeters = heightFeet * 0.3048; // Convert feet to meters
        const bmi = weight / (heightMeters * heightMeters);
        result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
        displayBMIRange(bmi);
        document.getElementById("bmiInfo").style.display = "block";
    }
});
