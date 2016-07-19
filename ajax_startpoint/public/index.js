

window.onload = function(){
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = function(){

    if (request.status === 200){
      var jsonString = request.responseText;
      countries = JSON.parse(jsonString);
      }
    main();
  }
  request.send( null );
};


function main(){
  countries.forEach(function(country){
    var option = document.createElement('option');
    option.innerHTML = country.name;
    var select = document.getElementById('selector');
    select.appendChild(option);
  })

  var button = document.getElementById('select-button');
  var form = document.getElementById('dropdown');
  button.onclick = function(event){
    var current = document.getElementById('selector').value;
    displayCountry(current);
  }

  form.onsubmit = function(event){
    event.preventDefault();
  }

  function displayCountry(current){
    var found = countries.filter(function(country) { return country.name === current; });
    createEntry(found[0]);
  }

  function createEntry(found){
    var li = document.createElement('li');
    var hr = document.createElement('hr');
    li.innerHTML =  "<b>Name:</b> " + found.name + " <b>Capital:</b> " + found.capital + " <b>Pop:</b> " + found.population
    var ul = document.getElementById('country-list');
    // ul.firstChild.innerHTML = "Name: " + found.name + " Capital: " + found.capital + " Pop: " + found.population;
    ul.appendChild(li);
    li.appendChild(hr);
  }



}