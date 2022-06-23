const operand1 = prompt("Enter the first value");
const operatorVar = prompt("Enter the operator you want to use");
const operand2 = prompt("Enter the second value");

var result; 
// switch (operatorVar){
//     case "+":
//         result= parseInt(operand1) + parseInt(operand2);
//         break;
//     case "-":
//         result= operand1-operand2;
//         break;
//     case "*":
//         result= operand1*operand2;
//         break;
//     case "/":
//         result= operand1/operand2;
//         break;
//     default:
//         alert("Invalid Operator!")
// }
if (operatorVar == '*'){
    result = operand1 * operand2;
}else if (operatorVar == '/'){
    result = operand1/operand2;
}else if(operatorVar == '+'){
    result = parseInt(operand1) + parseInt(operand2)
}else if (operatorVar == '-'){
    result = operand1-operand2
}else {
    alert("Invalid Operator")
}
alert("The result is :" + result)

function isDigit (input){
    var integer = true;
    for (var char of input) {
        if (char) {
            integer = false;
        }
    }
    return integer;
}