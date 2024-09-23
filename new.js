function converter() { 
    const temp = parseFloat(document.getElementById("tempInput").value);

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(temp)) {
        document.getElementById("result").value = "Invalid Input";
        return;
    }

    if (fromUnit === "F" && toUnit === "C") {
        result = (temp - 32) * 5 / 9;
    } 
    else if (fromUnit === "C" && toUnit === "F") {
        result = (temp * 9 / 5) + 32;
    } 
    else if(fromUnit === "C" && toUnit == "K"){
        result = temp + 273.15;
    }
    else if(fromUnit === "F" && toUnit == "K"){
        result = (temp - 32)*5/9 + 273.15;
    }
    else if(fromUnit === "K" && toUnit == "C"){
        result = temp - 273.15;
    }
    else if(fromUnit === "K" && toUnit == "F"){
        result = (temp - 273.15)*9/5+32;
    }
    else {
        result = temp;
    }

    document.getElementById("result").value = result.toFixed(2);
}

function reset() {
    
    document.getElementById("tempInput").value = "";
    document.getElementById("result").value = "";

    document.getElementById("fromUnit").value = "C";
    document.getElementById("toUnit").value = "C";
}
