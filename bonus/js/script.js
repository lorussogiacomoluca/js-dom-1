//1. Selezionare elementi di interesse: lampadina e bottone
const lamp = document.querySelector('img');
const btn = document.querySelector('.btn')

//2. Dichairazione funzione 
function toggleLamp(){
    if (lamp.src.includes('yellow')){
        lamp.src = lamp.src.replace('yellow','white')
    }else{
        lamp.src = lamp.src.replace('white','yellow')
    }
}

//3. addEventListener
btn.addEventListener('click', toggleLamp)

//4. Toggle Button
console.log(btn);