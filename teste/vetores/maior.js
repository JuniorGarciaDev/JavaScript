num = [1,6 ,4, 7, 10]
console.log(num)
maior = 0 
for (c=0;c < num.length;c++){
if (c > 0){
if (num[c] > num[c-1]){
    maior = num[c]
}
}
}
console.log('era pra escrever 10 ')
console.log(maior)
    