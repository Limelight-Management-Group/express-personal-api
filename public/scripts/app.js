console.log("Sanity Check: JS is working!");

$(document).ready(function(){

 console.log('app.js loaded!');

  $.get("/api/artists").success(function (artists){
    artists.forEach( function(artist) {
    renderartist(artist);
  })
  });

  // sampleartists.forEach( function(artist){
  //   renderartist(artist);
  // })
  $(".form-horizontal").submit(function(event) {
    event.preventDefault();
     var serialized = $(this).serialize()
    $.post("/api/artists", serialized, function(err, data){
      if(err){ console.log("something went wrong:", err)}
      console.log(data);
    })
    $(this).trigger("reset");
  })





    //  var formData = $(this).serialize()
    // $.post("/api/artists", formData).success(function(newartist){
    //       console.log(newartist);
    //       // renderartist(newartist);
    //     });
    // })

  // });




// this function takes a single artist and renders it to the page
function renderartist(artist) {

  console.log('rendering artist:', artist);
var artistPush = $('#artists');
  var artistHtml =
  "        <!-- one artist -->" +
  "        <div class='row artist' data-artist-id='" + "HARDCODED artist ID" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin artist internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail artist-art'>" +
  "                     <img src='images/arena.jpg' " + "http://placehold.it/400x400'" +  " alt='artist image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Name:</h4>" +
  "                        <span class='name'>" + artist.name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" +  artist.actName+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='artist-location'>" + artist.location + "</span>" +
  "                      </li>" +
  "                       <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='artist-age'>" + artist.age + "</span>" +
  "                      </li>" +
  "                       <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='artist-genre'>" + artist.genre + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of artist internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one artist -->";

  // render to the page with jQuery
  $("#artists").append(artistHtml);
}
});
