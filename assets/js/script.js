const form = document.getElementById ('form');

form.addEventListener('submit', function(event) {
event.preventDefault();

const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;

const bmi = (weight/ (height*height)).toFixed(2);

const value = document.getElementById('value');
let description ='';

value.classList.add('attention');

document.getElementById('infos').classList.remove('hidden');

if (bmi< 18.5) {
    description = "Alerta! Você está abaixo do peso ideal.";
}else if(bmi>= 18.5 && bmi <=25) {
description = "Você está dentro do peso ideal!";
value.classList.remove('attention');
value.classList.add('normal');

}else if(bmi>= 25 && bmi <=30) {
description = "Alerta! Você pode estar com sobrepeso.";
}else if(bmi>= 30 && bmi <=35) {
description = "Alerta! Você pode estar com obesidade moderada.";
}else if(bmi>= 35 && bmi <=40) {
description = "Alerta! Você pode estar com obesidade severa.";
}else{
description = "Alerta! Você pode estar com obesidade morbida.";
}


    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});

