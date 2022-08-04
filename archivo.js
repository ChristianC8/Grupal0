function segundoAMinuto() {
  let seg = document.getElementById("segundo").value;
  let min = seg / 60;
  document.getElementById("resultado").innerHTML = "resultado : " + min;
}

segundoAMinuto();

function minutoAhora() {
  let min = document.getElementById("minuto").value;
  let hora = min / 60;

  document.getElementById("resultado3").innerHTML = "resultado : " + hora;
}
minutoAhora();
