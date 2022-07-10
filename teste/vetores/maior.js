num = [8,6 ,4,7, 1]
num.sort()
console.log(num)
maior = 0 
for (c=0;c < num.length;c++){
    if (num[c] > maior){
        maior = num[c]
    }
}

console.log('era pra escrever 10 ')
console.log(maior)
    