let res = document.getElementById('res')
let n = []    
let analiseN = document.getElementById('numeros-adicionados')
let contador = 0

function Adicionar(){
        let textonumero =  document.getElementById('txtn')
        let num = (Number(textonumero.value))
        

        let testenum = num
        let totigual = 0
        if(contador = 1){
                for(c=0;c < n.length;c++){
                if(testenum == n[c]){
                    totigual += 1
                }
            }
        }

        contador = 1

        if(totigual == 0 && num <= 100 && textonumero.value.length != 0){
            n.push (num)
            res.innerHTML = ``
            analiseN.innerHTML = ''

                for(c = 0;c < n.length;c++){
                    var item = document.createElement('option')
                    item.text = `o valor  ${n[c]} foi adicionado  `
                    analiseN.appendChild(item)
                }

        }
        else{

            window.alert('esse valor é invalido ou esse numero ja foi adicionado')

        }


    }
function Finalizar(){
        if(n.length != 0){
        let menor = 101
        let maior = 0
        res.innerHTML = ''
        let soma = 0
        
        for(c = 0;c < n.length;c++){
            soma += n[c]
        }
        for(c = 0;c < n.length;c++){
            if (n[c] > maior){
                maior = n[c]
            }
        }

        for(c = 0;c < n.length;c++){
            if (n[c] < menor){
                menor = n[c]
            }
        }

        res.innerHTML += `ao todo temos ${n.length} Numeros ` 
        res.innerHTML += `<br>o maior numero foi ${maior}`
        res.innerHTML += `<br>o menor numero foi ${menor}`
        res.innerHTML += `<br> A soma entre os valores foi ${soma} `
        res.innerHTML +=`<br> A media dos valores foi ${soma/n.length} `
    }else{
        window.alert('Adicione valores antes de finalizar')
    }
    


    }
