function Click(){

let container = document.querySelector(".container");
let num = parseInt(document.querySelector("#num").value);
if(num % 2 == 0){
    container.innerHTML = `<p>${num}</p>`;
}
else{
    container.innerHTML = `<p>${num+1}</p>`;
}
}