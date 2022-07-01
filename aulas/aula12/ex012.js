var agora = new Date()
var hr = agora.getHours()
if (hr < 12){
    console.log(`é ${hr} horas tenha um Bom dia`)
}
else if (hr <= 18 ){
    console.log(`é ${hr} horas tenha uma Boa Tarde`)
    
}

else {
    console.log(`é ${hr} horas tenha uma Boa Noite`)
}
