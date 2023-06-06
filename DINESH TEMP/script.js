function ConvertFahrenheit() {
    var fahrenheit = parseFloat(document.getElementById("f").value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    var kelvin = celsius + 273.15;
    var rankine = fahrenheit + 459.67;

    document.getElementById("cel").value = celsius.toFixed(2);
    document.getElementById("k").value = kelvin.toFixed(2);
    document.getElementById("r").value = rankine.toFixed(2);
    document.getElementById("cen").value = celsius.toFixed(2);
}

function ConvertRankine() {
    var rankine = parseFloat(document.getElementById("r").value);
    var fahrenheit = rankine - 459.67;
    var celsius = (fahrenheit - 32) * 5 / 9;
    var kelvin = celsius + 273.15;

    document.getElementById("f").value = fahrenheit.toFixed(2);
    document.getElementById("cel").value = celsius.toFixed(2);
    document.getElementById("k").value = kelvin.toFixed(2);
    document.getElementById("cen").value = celsius.toFixed(2);
}

function ConvertCelsius() {
    var celsius = parseFloat(document.getElementById("cel").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    var kelvin = celsius + 273.15;
    var rankine = (celsius * 9 / 5) + 491.67;

    document.getElementById("f").value = fahrenheit.toFixed(2);
    document.getElementById("k").value = kelvin.toFixed(2);
    document.getElementById("r").value = rankine.toFixed(2);
    document.getElementById("cen").value = celsius.toFixed(2);
}

function ConvertCentigrade() {
    var centigrade = parseFloat(document.getElementById("cen").value);
    var fahrenheit = (centigrade * 9 / 5) + 32;
    var kelvin = centigrade + 273.15;
    var rankine = (centigrade * 9 / 5) + 491.67;

    document.getElementById("f").value = fahrenheit.toFixed(2);
    document.getElementById("k").value = kelvin.toFixed(2);
    document.getElementById("r").value = rankine.toFixed(2);
    document.getElementById("cel").value = centigrade.toFixed(2);
}

function ConvertKelvin() {
    var kelvin = parseFloat(document.getElementById("k").value);
    var celsius = kelvin - 273.15;
    var fahrenheit = (celsius * 9 / 5) + 32;
    var rankine = kelvin * 9 / 5;

    document.getElementById("f").value = fahrenheit.toFixed(2);
    document.getElementById("cel").value = celsius.toFixed(2);
    document.getElementById("r").value = rankine.toFixed(2);
    document.getElementById("cen").value = celsius.toFixed(2);
}

function creset() {
    document.getElementById("f").value = "";
    document.getElementById("cel").value = "";
    document.getElementById("k").value = "";
    document.getElementById("r").value = "";
    document.getElementById("cen").value = "";
}
