// function to execute the calculatation
function calculate() {
  let val1 = parseFloat(document.getElementById("value1").value);
  let val2 = parseFloat(document.getElementById("value2").value);
  let operator = document.getElementById("operator").value;
  let output = document.getElementById("output");
  console.log(val1, val2, operator, output);

  switch (operator) {
    case "+":
      output.innerText = val1 + val2;
      break;
    case "-":
      output.innerText = val1 - val2;
      break;
    case "*":
      output.innerText = val1 * val2;
      break;
    case "/":
      output.innerText = val1 / val1;
      break;
    case "%":
      output.innerText = val1 % val2;
      break;
    case "**":
      output.innerText = val1 ** val2;
      break;
      default:
        output.innerText = "Error"
  }
  console.log(output);
}
