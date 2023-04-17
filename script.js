var calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function calcular() {
    var numberOne = document.querySelector("input#txtn1").value;
    var numberTwo = document.querySelector("input#txtn2").value;

    var resSum = Number(numberOne) + Number(numberTwo);
    var resMin = Number(numberOne) - Number(numberTwo);
    var resMul = Number(numberOne) * Number(numberTwo);
    var resDiv = Number(numberOne) / Number(numberTwo);
    var resDivresto = Number(numberOne) % Number(numberTwo);

    document.getElementById("res-sum").innerText = `${resSum}`;
    document.getElementById("res-min").innerText = `${resMin}`;
    document.getElementById("res-mul").innerText = `${resMul}`;
    document.getElementById("res-div").innerText = `${resDiv}`;
    document.getElementById("res-divresto").innerText = `${resDivresto}`;
});