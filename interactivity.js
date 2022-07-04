let body = document.querySelector('body');
let nightButton = document.getElementById('night-mode-button');
let dayButton = document.getElementById('day-mode-button');


function nightModeClicker() {
  body.style.backgroundColor = '#050e30';
  body.style.color = 'white';
  body.classList.toggle("dark-mode");
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
  document.querySelector('table').style.backgroundColor = 'white';
  document.getElementById('name').style.color = 'white';
  document.getElementById('dylan').style.color = 'white';
  document.getElementById('age').style.color = 'white';
  document.getElementById('23').style.color = 'white';
  document.getElementById('qualifications').style.color = 'white';
  document.getElementById('results').style.color = 'white';
  document.getElementById('name').style.backgroundColor = '#050e30';
  document.getElementById('dylan').style.backgroundColor = '#050e30';
  document.getElementById('age').style.backgroundColor = '#050e30';
  document.getElementById('23').style.backgroundColor = '#050e30';
  document.getElementById('qualifications').style.backgroundColor = '#050e30';
  document.getElementById('name-row').style.backgroundColor = '#050e30';
  document.getElementById('name-result').style.backgroundColor = '#050e30';
  document.getElementById('age-row').style.backgroundColor = '#050e30';
  document.getElementById('age-result').style.backgroundColor = '#050e30';
  document.getElementById('qualifications-row').style.backgroundColor = '#050e30';
  document.getElementById('qualifications-result').style.backgroundColor = '#050e30';

}

nightButton.onclick = nightModeClicker;

function dayModeClicker() {
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  document.getElementById('mysterious-organism').style.color = 'black';
  document.getElementById('my-own-company').style.color = 'black';
  document.getElementById('credit-card-checker').style.color = 'black';
  document.getElementById('fotomatic').style.color = 'black';
  document.getElementById('holiday-planner').style.color = 'black';
  document.getElementById('about-me').style.color = 'black';
  document.getElementById('projects').style.color = 'black';
  document.getElementById('skills').style.color = 'black';
  document.getElementById('contact-me').style.color = 'black';
  document.getElementById('header').style.borderBottom = '1px solid black';
  document.querySelector('table').style.backgroundColor = 'black';
  document.getElementById('name').style.color = 'black';
  document.getElementById('dylan').style.color = 'black';
  document.getElementById('age').style.color = 'black';
  document.getElementById('23').style.color = 'black';
  document.getElementById('qualifications').style.color = 'black';
  document.getElementById('results').style.color = 'black';
  document.getElementById('name').style.backgroundColor = 'white';
  document.getElementById('dylan').style.backgroundColor = 'white';
  document.getElementById('age').style.backgroundColor = 'white';
  document.getElementById('23').style.backgroundColor = 'white';
  document.getElementById('qualifications').style.backgroundColor = 'white';
  document.getElementById('name-row').style.backgroundColor = 'white';
  document.getElementById('name-result').style.backgroundColor = 'white';
  document.getElementById('age-row').style.backgroundColor = 'white';
  document.getElementById('age-result').style.backgroundColor = 'white';
  document.getElementById('qualifications-row').style.backgroundColor = 'white';
  document.getElementById('qualifications-result').style.backgroundColor = 'white';
}

dayButton.onclick = dayModeClicker;
