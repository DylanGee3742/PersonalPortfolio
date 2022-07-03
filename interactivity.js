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
  document.querySelector('button').innerHTML = 'Day Mode!'

}

button.onclick = nightModeClicker;
