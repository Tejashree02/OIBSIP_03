const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

   // celsius to kelvin
    const celToKel = (cel) => {
        let kelvin = ((cel * 1)+273.15);
        return kelvin;
    }
    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    // Fahrenheit to Kelvin
    const fahToKel = (fah) => {
        let kelvin = ((fah - 32) * 5 / 9 + 273.15).toFixed(1);
        return kelvin;
    }

    //kelvin to celsius
    const kelToCel = (kel) => {
        let fahrenheit = ((kel - 273.15)).toFixed(1);
        return fahrenheit;
    }
    //kelvin to Fahrenheit
    const kelToFah = (kel) => {
    let fahrenheit = ((kel - 273.15) * 9 / 5 + 32).toFixed(1);
    return fahrenheit;
}


    if (valueTemp == 'cel') {
        document.getElementById("result1").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
        document.getElementById("result2").innerHTML = celToKel(inputTemp) + "&#176; Kelvin";
    }
    else if(valueTemp == 'kel')
    {
        document.getElementById("result1").innerHTML = kelToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = kelToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result1").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = fahToKel(inputTemp) + "&#176; Kelvin";
    }
}