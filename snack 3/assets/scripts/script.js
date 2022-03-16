let random = [];
let somma = 0;

for(i=0; i < 20; i++){
    random.push(Math.round(Math.random() * 100));
}

for(i=0; i<random.length; i++){
    if(i % 2 != 0){
        console.log(`Numero in posizione ${i}: ${random[i]}`);
        somma += random[i];
    }
    else{
        console.log(`Numero in posizione ${i}: ${random[i]}`);
    }
}
console.log(`Somma numeri in posizione dispari: ${somma}`)