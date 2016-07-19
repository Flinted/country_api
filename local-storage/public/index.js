var init = function(){
  console.log('app started');
  main();
}

function main(){
  var button = document.getElementById('add-button');
  button.onclick = handleClick;

  var form = document.getElementById('film-form');
  form.onsubmit = handleSubmit;

  films= JSON.parse(localStorage.getItem("film_app_list")) || [];
  console.log("on main got films: ", films)

  films.forEach(function(filmName){
    var li = document.createElement('li');
    li.innerText = filmName;
    var ul = document.getElementById('film-list');
    ul.appendChild(li);
  })
}

var handleClick = function(){
  var textInput = document.getElementById('film-text-input');
  var filmName = textInput.value;
  var li = document.createElement('li');
  li.innerHTML = filmName;
  var ul = document.getElementById('film-list');
  ul.appendChild(li);

  films.push(filmName);
  localStorage.setItem('film_app_list', JSON.stringify(films));
}

var handleSubmit = function(event){
  event.preventDefault();
  handleClick();
}

var appendFilm = function(filmName){
  var li = document.createElement('li');
  li.innerText = filmName;
  var ul = document.getElementById('film-list');
  ul.appendChild(li);
}

window.onload = init;

