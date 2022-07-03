function tabuada(){
var tab = document.getElementById('seltab')
var numero = document.getElementById('txtn')
var n = Number(numero.value)
if(numero.value.length == 0 ){
    window.alert('porfavor digite um numero ')
    return;
}
tab.innerHTML = ' '
for (c=1;c<=10;c++) {
  var item = document.createElement('option')
  item.text = `${n} x ${c} = ${n * c}`
  item.value = `tab${c}`
    tab.appendChild(item)

}

}