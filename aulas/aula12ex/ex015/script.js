function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano') 
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano)
   window.alert('[ERRO] verefique os dados e tenta novamente ')
   else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if( fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'criança-homem.png')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50 ){
                //Adulto
                img.setAttribute('src', 'adulto.png')
            }else  {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
                if (idade >=0 && idade < 10 ){
                    //criança
                    img.setAttribute('src', 'criança-mulher.png')
                } else if (idade < 21 ) {
                    //jovem
                    img.setAttribute('src', 'jovem-mulher.png')
                } else if (idade < 50 ){
                    //Adulta
                    img.setAttribute('src', 'adulta.png')
                }else  {
                    //idosa
                    img.setAttribute('src', 'idosa.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
   }
}