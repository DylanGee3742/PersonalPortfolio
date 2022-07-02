let body = document.querySelector('body');
let button = document.querySelector('button');


function nightModeClicker() {
  body.style.backgroundColor = '#050e30';
  body.style.color = 'white';
  document.getElementById('mysterious-organism').style.color = 'white';
  document.getElementById('my-own-company').style.color = 'white';
  document.getElementById('credit-card-checker').style.color = 'white';
  document.getElementById('fotomatic').style.color = 'white';
  document.getElementById('holiday-planner').style.color = 'white';
  document.getElementById('about-me').style.color = 'white';
  document.getElementById('projects').style.color = 'white';
  document.getElementById('skills').style.color = 'white';
  document.getElementById('contact-me').style.color = 'white';
  document.getElementById('header').style.borderBottom = '1px solid white';
}

button.onclick = nightModeClicker;
