let body = document.querySelector('body');
let button = document.querySelector('button');


function nightModeClicker() {
  body.style.backgroundColor = '#121212';
  body.style.color = 'white';
  document.getElementById('mysterious-organism').style.color = 'white';
  document.getElementById('my-own-company').style.color = 'white';
  document.getElementById('credit-card-checker').style.color = 'white';
  document.getElementById('fotomatic').style.color = 'white';
  document.getElementById('holiday-planner').style.color = 'white';
}

button.onclick = nightModeClicker;
