let num = [5, 9, 0, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vertor tem ${num.length} posiçoes `)
console.log(`o primeiro valor do vetor é ${num[0]}`) 
let pos = num.indexOf(9)
if(pos == -1){
console.log('o valor nao foi encontrado')
}else {
console.log(`o valor 9 esta na posiçao ${pos}`)
}


