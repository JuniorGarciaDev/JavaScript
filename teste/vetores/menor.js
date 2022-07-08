num = [0,6,1 ,4, 7, 10]
console.log(num)
menor = 101 
for (c=0;c < num.length;c++){
if (c > 0){
if (num[c-1] < num[c]){
    menor = num[c-1]
}
}
}
console.log('era pra escrever 1 ')
console.log(menor)
    