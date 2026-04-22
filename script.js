function sumar() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  document.getElementById("resultado").innerText = n1 + n2;
  document.getElementById("resultado-container").style.display = "block";
}

function restar() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  document.getElementById("resultado").innerText = n1 - n2;
  document.getElementById("resultado-container").style.display = "block";
}

function multiplicar() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  document.getElementById("resultado").innerText = n1 * n2;
  document.getElementById("resultado-container").style.display = "block";
}

function dividir() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  document.getElementById("resultado").innerText = n1 / n2;
  document.getElementById("resultado-container").style.display = "block";
}

function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").innerText = "";

  document.getElementById("resultado-container").style.display = "none";
}