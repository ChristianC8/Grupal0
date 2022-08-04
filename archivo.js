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

function segundosAMilisegundos() {
  let seg = document.getElementById("segundo1").value;
  let resultadoMilisegundos = seg / 1000;
  document.getElementById("resultadoSegundosAMilisegundos").innerHTML = "Resultado : " + resultadoMilisegundos;
};

segundosAMilisegundos()

function horaADia(){
  let hor = document.getElementById("hora").value;
  let dia = hor / 24;
  document.getElementById("resultado2").innerHTML = "resultado : " + dia;



}
horaADia();