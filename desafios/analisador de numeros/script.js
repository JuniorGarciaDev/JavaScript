let res = document.getElementById('res')
let n = []    
let analiseN = document.getElementById('numeros-adicionados')

function Adicionar(){
    let textonumero =  document.getElementById('txtn')
    let num = (Number(textonumero.value))
    n.push (num)
    
    analiseN.innerHTML = ''
        for(c = 0;c < n.length;c++){
            var item = document.createElement('option')
            item.text = `o valor  ${n[c]} foi adicionado  `
            analiseN.appendChild(item)
        }
    }

    function Finalizar(){
        res.innerHTML = ''
        res.innerHTML += `ao todo temos ${n.length} Numeros `       
       


    }
