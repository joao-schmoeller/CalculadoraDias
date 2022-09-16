const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function contadorDias() {

  
  let date_inicio = new Date(document.form_main.data_ini.value);
  let date_final = new Date(document.form_main.data_fim.value);
  let diff = date_final.getTime() - date_inicio.getTime();
  document.getElementById('days').innerText = Math.floor(diff / day);
  }
  
  

  
