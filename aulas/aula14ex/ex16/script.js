function Contar() {
  var inicio = document.getElementById("txtInicio");
  var fim = document.getElementById("txtFim");
  var passo = document.getElementById("txtPasso");
  var res = document.getElementById("res");
  var i = Number(inicio.value)
  var f = Number(fim.value)
  var p = Number(passo.value)
  res.innerHTML = ``;

  if (p <= 0){
    window.alert ('o passo nao pode ser 0 entao recebe automaticamente 1 ')
    p = 1
  }

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = ("[ERRO] Por favor adicionar um valor ");
    return;
  }

  if (i <= f) {
    console.log ('inicio <= fim ')

    for (
      c = i;
      c <= f;
      c = c + p
    ) {
      res.innerHTML += `${c} \u{1F449}`;
    }
    res.innerHTML += ` \u{1F3C1} `;
  } else {
  console.log ('inicio >= fim')
    for (
      c = i;
      c >= f;
      c = c - p
    ) {
      res.innerHTML += `${c} \u{1F449}`;
    }
    res.innerHTML += ` \u{1F3C1} `;
  }
}
 
