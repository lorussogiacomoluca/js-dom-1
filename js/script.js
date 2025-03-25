//1. Selezionare elementi di interesse: lampadina e bottone
const lamp = document.querySelector('img');
const btn = document.querySelector('.btn')

//2. addEventListener

btn.addEventListener('click', function(){
    ((!lamp.src.includes('yellow')) ? lamp.src = lamp.src.replace('white','yellow') : lamp.src = lamp.src.replace('yellow','white'));
})