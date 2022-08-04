function segundoAMinuto() {
  let seg = document.getElementById("segundo").value;
  let min = seg / 60;
  document.getElementById("resultado").innerHTML = "resultado : " + min;
}



segundoAMinuto();

