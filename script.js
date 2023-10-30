function reset () {
    document.getElementById("txtNum1").value = "0";
    document.getElementById("txtNum2").value = "0";
    document.getElementById("txtSum").value = "0";

 }

 function add () {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);

    var sum = num1 + num2;

    document.getElementById("txtSum").value = String(sum);
 }



 function subtract () {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);

    var difference = num1 - num2;

    document.getElementById("txtSum").value = String(difference);
 }


 function multiply () {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);

    var multiply = num1 * num2;

    document.getElementById("txtSum").value = String(multiply);
 }

 function quotient () {
    var num1 = Number(document.getElementById("txtNum1").value);
    var num2 = Number(document.getElementById("txtNum2").value);

    var quotient = num1 / num2;

    document.getElementById("txtSum").value = String(quotient);
 }

