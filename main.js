function add() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = Number(num1) + Number(num2);
    window.alert(sum);

}

function subtract() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var diff = num1 - num2;
    window.alert(diff);

}

function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var quo = num1 / num2;
    window.alert(quo);

}

function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var prod = num1 * num2;
    window.alert(prod);

}