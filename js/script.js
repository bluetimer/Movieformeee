// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    $(".text-center").hide();
    var choice = $("#search-term").val();
    var request_url = "https://www.omdbapi.com/?apikey=b08791ef&s=" + 
    choice;
  fetch(request_url)
    .then(function(response) {
      return response.json();
      
    })
    .then(function(data) {
        data.Search.forEach(movie =>   {
            if(movie.Poster !== "N/A" ){
                $('#results').append('<h4>' + movie.Title + '</h4>')
                    .append('<img src = " ' + movie.Poster + ' "/><br>');
            }
        
        });

    })
  


  
  
});

