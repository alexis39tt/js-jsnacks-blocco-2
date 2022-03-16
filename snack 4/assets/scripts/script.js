let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [1, 2, 3];
let array2Lenght = array2.length;

console.log(`Il primo array ha ${array1.length} elementi: ${array1}`)
console.log(`Il secondo array ha prima ${array2.length} elementi: ${array2}`)

for (i=0; i<array1.length-array2Lenght; i++){
    array2.push(Math.ceil(Math.random()*10));
}

console.log(`E poi ha ${array2.length} elementi: ${array2}`);