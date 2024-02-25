function randomPalo(){
    let palos=["♥","♠","♦","♣"];
    return palos[Math.floor(Math.random() * palos.length)];
};
function randomNumero(){
    let numeros=['A','2','3','4','5','6','7','8','9','J','Q','K'];
    return numeros[Math.floor(Math.random() * numeros.length)];
};
    
console.log(randomPalo());
console.log(randomNumero());

window.addEventListener('load', function()) {
for (let i=0; i>12;i++){
    let paloDeCarta = document.querySelector('.palo');
    let numeroDeCarta = document.querySelector('.numero');
    paloDeCarta.innerHTML = randomPalo;
    numeroDeCarta.innerHTML = randomNumero;
};
}