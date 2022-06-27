function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src ='manha250.PNG'
        document.body.style.background = '#de4e1a'
    } else if (hora >= 12 && hora <= 18){
        // Boa tarde
        img.src = 'tarde250.PNG'
        document.body.style.background = '#a56152'
    }else {
        //Boa noite
        img.src = 'noite250.PNG'
        document.body.style.background = '#0268a3'
    }

}
