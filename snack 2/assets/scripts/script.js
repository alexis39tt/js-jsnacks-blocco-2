let nomi = ["Marco", "Flavio", "Roberto", "Alessia", "Claudia", "Filippo", "Andrea", "Anna", "Rosa", "Tatiana"];
let cognomi = ["Bianchi", "Giglioli", "Pugliese", "Rimoli", "Serafino", "Romano", "Russo", "Morelli", "Ferrari", "Leone"];
let random = [];

for(i=0; i < cognomi.length; i++){
    random.push(Math.round(Math.random() * 9));
}
console.log(`Lista degli invitati:`);
for (i = 0; i < cognomi.length; i++) {
    console.log(`${nomi[random[i]]} ${cognomi[i]}`);
}