function getVal() {
  var input = Number(document.getElementById("input").value);
  var result = document.getElementById("result");
  var binary = input.toString(2);
  var hexa = input.toString(16);
  console.log("Decimal: " + input);
  console.log("Binary: " + binary);
  console.log("Hexa-decimal: " + hexa);

  result.innerHTML = `Decimal: ${input}<br/>Binary: ${binary}<br/>Hexa-Decimal: ${hexa}`;
}
