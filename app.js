//obtnemos la fecha actual con la funcion new Date y asignamos cada parte de la fecha a una variable
let fecha_actual = new Date();
let d_actual = fecha_actual.getDate();
let m_actual = fecha_actual.getMonth();
let a_actual = fecha_actual.getFullYear();

//obtnemos los elementos de DOM para poder usarlos y realizar la obtencion de los valores de los inputs
let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let anio = document.querySelector("#anio");
let years = document.querySelector("#years");
let months = document.querySelector("#months");
let days = document.querySelector("#days");
const btn = document.querySelector("#btn");

//declaramos los contadores y los incializamos en 0
let dias = 0,
  meses = 0,
  anios = 0;

//relizamos el proceso de escucha del boton y el calculo de ambas fechas
btn.addEventListener("click", () => {
  dia = parseInt(dia.value);
  mes = parseInt(mes.value);
  anio = parseInt(anio.value);
  while (dia < d_actual) {
    dia++;
    dias++;
  }
  while (mes <= m_actual) {
    mes++;
    meses++;
  }
  while (anio < a_actual) {
    anio++;
    anios++;
  }

  years.textContent = anios;
  months.textContent = meses;
  days.textContent = dias;
});
