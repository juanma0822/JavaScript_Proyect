let mes=13;

let estacion

if (mes==1 || mes==2 || mes==12) {
    estacion= "Invierno";
} else if(mes==3 || mes==4 || mes==5){
    estacion= "Primavera";
}else if(mes==9 || mes==10 || mes==11){
    estacion= "Otoño";
}else{
    estacion= "Incorrecto";
}

console.log(estacion);