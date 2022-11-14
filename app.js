function insert(n) {
  const num = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = num + n;
}

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

function back() {
  const resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calculo() {
  const resultado = document.getElementById('resultado').innerHTML;

  if(resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
    document.getElementById('resultado').innerHTML = 'ERRO';
  }
}