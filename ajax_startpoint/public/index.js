window.onload = function(){
  console.log("window loaded");

  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = function(){

    if (request.status === 200){
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      var country = countries[5];
      console.log(country);
      }
  }

  request.send( null );
  // console.log(request);
}