//1. Selezionare elementi di interesse: lampadina e bottone
const lamp = document.querySelector('img');
const btn = document.querySelector('.btn')
const main = document.querySelector('main')

//2. Dichairazione funzione 
function toggleLamp(){
    if (lamp.src.includes('yellow')){
        lamp.src = lamp.src.replace('yellow','white')
    }else{
        lamp.src = lamp.src.replace('white','yellow')
    }
}

//3. addEventListener for toggleLamp
btn.addEventListener('click', toggleLamp)

//4. Toggle Button function
console.log(btn);

function toggleBtn(){
    if (btn.textContent == 'Accendi'){
        btn.textContent = 'Spegni'
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-danger');
        main.classList.remove('bg-black')
    }else{
        btn.textContent = 'Accendi';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-primary');
        main.classList.add('bg-black')
    }
}

//5. addEventListener for toggleBtn
btn.addEventListener('click', toggleBtn)
